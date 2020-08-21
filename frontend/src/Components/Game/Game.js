import React, { useState, useEffect } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addNewDate, changeFlag, addTotalScore } from '../../redux/actions';
import success1 from './images/success1.gif';
import success2 from './images/success2.gif';
import success3 from './images/success3.gif';
import success4 from './images/success4.gif';
import success5 from './images/success5.gif';
import failure1 from './images/failure1.gif';
import failure2 from './images/failure2.gif';
import failure3 from './images/failure3.gif';
import failure4 from './images/failure4.gif';
import failure5 from './images/failure5.gif';
import victory1 from './images/victory1.gif';
import victory2 from './images/victory2.gif';
import victory3 from './images/victory3.gif';
import victory4 from './images/victory4.gif';
import victory5 from './images/victory5.gif';
import victory6 from './images/victory6.gif';
import victory7 from './images/victory7.gif';
import time1 from './images/time1.gif';
// import check from './images/galochka_1.png';

import './style.css';

function Game() {
  const [answer, setAnswer] = useState('');
  const [task, setTask] = useState('Самое время начать заниматься!!');
  const [needScore, setNeedScore] = useState([]);
  const [options, setOptions] = useState([]);
  const [photo, setPhoto] = useState(false);
  const [path, setPath] = useState('');
  const [theme, setTheme] = useState('');

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.email);
  const score = useSelector((state) => state.game.score);
  const totalScore = useSelector((state) => state.user.score);
  const access = useSelector((state) => state.user.access);
  const Allquestions = useSelector((state) => state.game.questions);
  const rightAnswer = useSelector((state) => state.game.answer);

  const photos = {
    s1: success1,
    s2: success2,
    s3: success3,
    s4: success4,
    s5: success5,
    f1: failure1,
    f2: failure2,
    f3: failure3,
    f4: failure4,
    f5: failure5,
    v1: victory1,
    v2: victory2,
    v3: victory3,
    v4: victory4,
    v5: victory5,
    v6: victory6,
    v7: victory7,
    t1: time1,
  };

  function getAnswer(e) {
    setAnswer(e.target.value);
  }

  useEffect(() => {
    (async () => {
      setPath(photos[`t${1}`]);
      setPhoto(true);

      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user,
        }),
      });
      const result = await response.json();
      dispatch(addTotalScore(result.score));
      setNeedScore(result.needScore);
      setTheme(result.taskConfig.theme[0]);
      dispatch({ type: 'questions', questions: [] });
    })();
  }, [dispatch]);

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
    setPhoto(false);
    if (resp.tasks.length === 0) {
      setTask('По заданной теме нет заданий');
    } else {
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
  }

  async function sendAnser(e) {
    e.preventDefault();
    const number = Math.floor(Math.random() * 5) + 1;
    const userAnswer = e.target.answer.value;
    if (Allquestions !== '') {
      if (userAnswer.toLowerCase() === rightAnswer.toLowerCase()) {
        dispatch({ type: 'right', score: 1 });
        const numberOfQuestion = Math.floor(Math.random() * Allquestions.length);
        setTask('Верно!');
        setPath(photos[`s${number}`]);
        setPhoto(true);
        setTimeout(() => {
          setTask(`Вопрос: \n
          ${Allquestions[numberOfQuestion].question}`);
          setPhoto(false);
        }, 2000);
        setOptions(Allquestions[numberOfQuestion].answerOptions);
        dispatch({ type: 'newgame', question: Allquestions[numberOfQuestion].question, answer: Allquestions[numberOfQuestion].answerTrue });
        setAnswer('');

        const responce = await fetch('/api/addscore', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user,
          }),
        });
        const resp = await responce.json();
        dispatch(addTotalScore(resp));

        if (needScore === score + 1) {
          dispatch(changeFlag());
          const doneresponce = await fetch('/api/done', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user,
            }),
          });
          const resp = await doneresponce.json();
          window.localStorage.setItem('accessFlag', JSON.stringify(true));
          window.localStorage.setItem('date', JSON.stringify(new Date().toLocaleDateString()));
          /// ///////////

          setTimeout(() => {
            setTask('Доступ разблокирован!!');
            setPhoto(true);
            setPath(photos.v1);
            setTimeout(() => { setPath(photos.v2); }, 1500);
            setTimeout(() => { setPath(photos.v3); }, 2100);
            setTimeout(() => { setPath(photos.v5); }, 3800);
            setTimeout(() => { setPath(photos.v6); }, 5000);
            setTimeout(() => { setPath(photos.v7); }, 7000);
          }, 2000);
          setTimeout(() => {
            setTask(`Вопрос: \n
            ${Allquestions[numberOfQuestion].question}`);
            setPhoto(false);
          }, 12000);

          /// ////////
        }
      } else {
        if (score === 0) {
          dispatch({ type: 'wrong', score: 0 });
        } else {
          dispatch({ type: 'wrong', score: 1 });
        }
        const repeate = task;
        setTask('Не верно! Попробуй еще раз');
        setPath(photos[`f${number}`]);
        setPhoto(true);
        setTimeout(() => {
          setTask(repeate);
          setPhoto(false);
        }, 2000);
        setAnswer('');
      }
    }
  }

  return (
    <>
      {/* <Container classMane="gamefield"> */}
      <Jumbotron className="jumbotron1">
        <div>
          <div className="boards">

            {/* доска статистики */}
            <div className="statistic">
              <>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow={score} aria-valuemin="0" aria-valuemax={needScore} style={{ width: `${100 / needScore * score}%` }} />
                </div>
              </>
              <b>Всего очков:</b>
              <b>
                {' '}
                {totalScore}
              </b>
              <br />

              <b>Выполнено:</b>
              <b>
                {' '}
                {`${score} из ${needScore}`}
              </b>
              <br />

              {Allquestions.length === 0 ? (
                <>

                  <div className="needPlace">
                    <button className="btn btn-info" type="button" onClick={startGame}>СТАРТ</button>
                  </div>
                </>
              )
                : (
                  <>
                    <div className="needPlace">

                      <b>Сегодняшняя тема:</b>
                      <br />
                      <b>
                        {' '}
                        {theme}

                      </b>
                    </div>
                  </>
                )}
            </div>

            {/* доска с заданием  */}
            <div className="blackboard">
              {task}
              <br />
              {photo ? (
                <>
                  <img className="image" src={path} alt="Logo" />
                </>
              )
                : (
                  <>
                  </>
                )}
            </div>
          </div>

        </div>

        <div className="answer">

          {(options.length > 1) ? (
            <>
              {/* <h4>Варианты ответа:</h4> */}
              {options.map((option, index) => (
                <div>

                  <i key={option}>
                    {`${index + 1})  `}
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

                </div>
              ))}
              {/* <form className="submitform" onSubmit={sendAnser}>
                <label htmlFor="answer">
                  <input className="form-control submitform" id="answer" onChange={getAnswer} name="answer" type="text" value={answer} required autoComplete="off" />
                </label>
                <button className="btn btn-secondary submitform" type="submit">Ответ</button>
              </form> */}
            </>
          ) : (
            <>
              {/* <h4>Вариантов ответа нет</h4> */}
              {/* btn btn-secondary submitform */}
            </>
          )}

          {Allquestions.length === 0 ? (
            <>

            </>
          )
            : (
              <>
                <form className="submitform" onSubmit={sendAnser}>
                  <label htmlFor="answer">
                    {/* {' '}
              Ответ */}
                    <input className="form-control submitform" id="answer" onChange={getAnswer} name="answer" type="text" value={answer} required autoComplete="off" />
                  </label>
                  {/* <br /> */}
                  <button className="checkbutton" type="submit" />
                </form>
              </>
            )}

        </div>

      </Jumbotron>
      {/* </Container> */}

    </>
  );
}

export default Game;
