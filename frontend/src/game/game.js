import React, { useState } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addNewDate, changeFlag } from '../redux/actions';

import './style.css';

function Game() {
  const [answer, setAnswer] = useState('');
  const [task, setTask] = useState('Самое время начать заниматься!!');
  const [needScore, setNeedScore] = useState([]);
  const [options, setOptions] = useState([]);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.email);
  const score = useSelector((state) => state.game.score);
  const access = useSelector((state) => state.user.access);
  const Allquestions = useSelector((state) => state.game.questions);
  const rightAnswer = useSelector((state) => state.game.answer);

  function getAnswer(e) {
    setAnswer(e.target.value);
  }

  async function startGame() {
    const todayDate = new Date().toLocaleDateString();

    if (access.date !== todayDate) {
      dispatch(addNewDate(todayDate));
    }
    const responce = await fetch('/api/game', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user,
      }),
    });
    const resp = await responce.json();
    setNeedScore(resp.needScore);

    if (score < resp.needScore) {
      dispatch({ type: 'questions', questions: resp.tasks });

      const numberOfQuestion = Math.floor(Math.random() * resp.tasks.length);
      setTask(`Вопрос: \n
        ${resp.tasks[numberOfQuestion].question}`);
      setOptions(resp.tasks[numberOfQuestion].answerOptions);
      dispatch({ type: 'newgame', question: resp.tasks[numberOfQuestion].question, answer: resp.tasks[numberOfQuestion].answerTrue });
    } else {
      setTask('Произошла ошибка, попробуте позже');
    }
  }

  async function sendAnser(e) {
    e.preventDefault();
    const userAnswer = e.target.answer.value;
    if (Allquestions !== '') {
      if (userAnswer === rightAnswer) {
        dispatch({ type: 'right', score: 1 });
        const numberOfQuestion = Math.floor(Math.random() * Allquestions.length);
        setTask('Верно!');
        setTimeout(() => {
          setTask(`Вопрос: \n
          ${Allquestions[numberOfQuestion].question}`);
        }, 1000);
        setOptions(Allquestions[numberOfQuestion].answerOptions);
        dispatch({ type: 'newgame', question: Allquestions[numberOfQuestion].question, answer: Allquestions[numberOfQuestion].answerTrue });
        setAnswer('');

        if (needScore <= score + 1) {
          dispatch(changeFlag());
          const responce = await fetch('/api/done', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user,
            }),
          });
          const resp = await responce.json();
          window.localStorage.setItem('accessFlag', JSON.stringify(true));
          window.localStorage.setItem('date', JSON.stringify(new Date().toLocaleDateString()));
        }
      } else {
        dispatch({ type: 'wrong', score: 1 });
        const repeate = task;
        setTask('Не верно! Попробуй еще раз');
        setTimeout(() => {
          setTask(repeate);
        }, 1000);
        setAnswer('');
      }
    }
  }

  return (
    <>
      <Container>
        <Jumbotron>
          <div>
            счет:
            {score}
          </div>
          <button className="btn btn-primary" type="button" onClick={startGame}>Начать игру</button>
          <div className="blackboard">{task}</div>
          {(options.length > 1) ? (
            <>
              <h4>Варианты ответа:</h4>
              {options.map((option, index) => (

                <i key={option}>
                  {`Вариант ${index + 1} - `}
                  {' '}
                  <b>{option}</b>
                  {index !== options.length - 1
                    ? (
                      <>
                        {',  '}
                      </>
                    )
                    : (
                      <>
                        .
                      </>
                    )}
                </i>
              ))}
            </>
          ) : (
            <>
              <h4>Вариантов ответа нет</h4>
            </>
          )}
          <form onSubmit={sendAnser}>
            <label htmlFor="answer">
              {' '}
              Ответ
              <input className="form-control" id="answer" onChange={getAnswer} name="answer" type="text" value={answer} required />
            </label>
            <br />
            <button className="btn btn-primary" type="submit">Ответь</button>
          </form>
        </Jumbotron>
      </Container>

    </>
  );
}

export default Game;
