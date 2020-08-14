/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { sendCategory } from '../../redux/actions';
import './Config.css';

function Config() {
  const taskListCategori = ['Математика', 'Химия', 'Физика'];
  const dispatch = useDispatch();
  const history = useHistory();

  function sendCatego(category) {
    dispatch(sendCategory(category));
    history.push('/tasks');
  }

  return (
    <>
      <div className="Config">
        <h1>Личный кабинет</h1>
        {' '}
        <span>Баллы: 10</span>
        <h3>Выберете Дисциплину</h3>
        {taskListCategori.map((elem) => (
          <div onClick={() => sendCatego(elem)} className="card">
            <img src="img_avatar.png" alt="будущая картинка" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>{elem}</b></h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Config;

{ /* <button type="button">Maтематика</button>
&nbsp;
<button type="button">Физика</button>
&nbsp;
<button type="button">Химия</button>
&nbsp;
<button type="button">Информатика</button> */ }
// onClick={() => choiceCategori('Математика')}

// const allTasks = [
//   {
//     catigori: 'Maтематика',
//     qwesList: [
//       {
//         qwes: 'Вопрос по матиматике 1',
//         ans: 'Ответ 1',
//       },
//       {
//         qwes: 'Вопрос по матиматике 2',
//         ans: 'Ответ 2',
//       },
//       {
//         qwes: 'Вопрос по матиматике 3',
//         ans: 'Ответ 3',
//       },
//       {
//         qwes: 'Вопрос по матиматике 4',
//         ans: 'Ответ 1',
//       },
//     ],
//   },
//   {
//     catigori: 'Физика',
//     qwesList: [
//       {
//         qwes: 'Вопрос по Физикe 1',
//         ans: 'Ответ 1',
//       },
//       {
//         qwes: 'Вопрос по Физике 2',
//         ans: 'Ответ 2',
//       },
//       {
//         qwes: 'Вопрос по Физике 3',
//         ans: 'Ответ 3',
//       },
//       {
//         qwes: 'Вопрос по Физике 4',
//         ans: 'Ответ 4',
//       },
//     ],
//   },
//   {
//     catigori: 'химия',
//     qwesList: [
//       {
//         qwes: 'Вопрос по химии 1',
//         ans: 'Ответ 1',
//       },
//       {
//         qwes: 'Вопрос по химии 2',
//         ans: 'Ответ 2',
//       },
//       {
//         qwes: 'Вопрос по химии 3',
//         ans: 'Ответ 3',
//       },
//       {
//         qwes: 'Вопрос по химии 4',
//         ans: 'Ответ 1',
//       },
//     ],
//   },
//   {
//     catigori: 'Информатика',
//     qwesList: [
//       {
//         qwes: 'Вопрос по Информатике 1',
//         ans: 'Ответ 1',
//       },
//       {
//         qwes: 'Вопрос по Информатике 2',
//         ans: 'Ответ 2',
//       },
//       {
//         qwes: 'Вопрос по Информатике 3',
//         ans: 'Ответ 3',
//       },
//       {
//         qwes: 'Вопрос по Информатике 4',
//         ans: 'Ответ 1',
//       },
//     ],
//   }];
