import React, { useState } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import './style.css';

function Game() {
  const [answer, setAnswer] = useState('');
  const [task, setTask] = useState('Самое время начать заниматься!!');
  // const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState([]);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.email);
  const score = useSelector((state) => state.game.score);
  // const question = useSelector((state) => state.game.question);
  const Allquestions = useSelector((state) => state.game.questions);
  const rightAnswer = useSelector((state) => state.game.answer);

  function getAnswer(e) {
    setAnswer(e.target.value);
  }

  async function startGame() {
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

    if (score < resp.needScore) {
      dispatch({ type: 'questions', questions: resp.tasks });

      const numberOfQuestion = Math.floor(Math.random() * resp.tasks.length);
      setTask(`Вопрос: \n
      ${resp.tasks[numberOfQuestion].question}`);
      setOptions(resp.tasks[numberOfQuestion].answerOptions);
      dispatch({ type: 'newgame', question: resp.tasks[numberOfQuestion].question, answer: resp.tasks[numberOfQuestion].answerTrue });
    } else {
      setTask('Ты выполнил все задания на сегодня');
    }
  }

  function sendAnser(e) {
    e.preventDefault();
    const userAnswer = e.target.answer.value;
    if (Allquestions !== '') {
      if (userAnswer === rightAnswer) {
        dispatch({ type: 'right', score: 1 });
        const numberOfQuestion = Math.floor(Math.random() * Allquestions.length);
        setTask(`Вопрос: \n
        ${Allquestions[numberOfQuestion].question}`);
        setOptions(Allquestions[numberOfQuestion].answerOptions);
        dispatch({ type: 'newgame', question: Allquestions[numberOfQuestion].question, answer: Allquestions[numberOfQuestion].answerTrue });
        setAnswer('');
      } else {
        dispatch({ type: 'wrong', score: 1 });
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
          <button type="button" onClick={startGame}>Начать игру</button>
          <div className="blackboard">{task}</div>
          {(options.length > 1) ? (
            <>
              <div>Варианты ответов:</div>
              {options.map((option, index) => (
                <div key={option}>
                  {`Вариант ${index + 1} - ${option}` }
                </div>
              ))}
            </>
          ) : (
            <>
              <div>Вариантов ответов нет</div>
            </>
          )}
          <form onSubmit={sendAnser}>
            <label htmlFor="answer">
              {' '}
              Ответ
              <input className="form-control" id="answer" onChange={getAnswer} name="answer" type="text" value={answer} required />
            </label>
            <br />
            <button type="submit">Ответь</button>
          </form>
        </Jumbotron>
      </Container>

    </>
  );
}

export default Game;
