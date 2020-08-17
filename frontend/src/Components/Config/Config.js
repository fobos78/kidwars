/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { sendCategory } from '../../redux/actions';
import './Config.css';

function Config() {
  const [classNumber, setClassNumber] = useState(1);
  const [fourth, setFourth] = useState(1);
  const [theme, setTheme] = useState('Математика');
  const [config, setConfig] = useState();
  const [needScore, setNeedScore] = useState('');

  function changeInput(event) {
    setNeedScore(event.target.value);
  }

  console.log(config, '&&&&&&&&&&&&&&&&&&&&&');

  function sendConfig(event) {
    event.preventDefault();
    setConfig({
      ...config,
      classNumber,
      fourth,
      theme,
      needScore,
    });
    setNeedScore('');
  }

  useEffect(() => {
    (async () => {
      const response = await fetch('/config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          config,
        }),
      });
    })();
  }, [config]);
  return (
    <div className="Config">

      <form onSubmit={sendConfig} name="form">
        <p>
          <button className="button" type="button">Класс</button>
          <button onClick={() => setClassNumber(1)} className="button" type="button">1</button>
          <button onClick={() => setClassNumber(2)} className="button" type="button">2</button>
          <button onClick={() => setClassNumber(3)} className="button" type="button">3</button>
          <button onClick={() => setClassNumber(4)} className="button" type="button">4</button>
        </p>
        <p>
          Четверть:
          <button onClick={() => setFourth(1)} className="button" type="button">1</button>
          <button onClick={() => setFourth(2)} className="button" type="button">2</button>
          <button onClick={() => setFourth(3)} className="button" type="button">3</button>
          <button onClick={() => setFourth(4)} className="button" type="button">4</button>
        </p>
        <p>
          Дисциплина:
          <button onClick={() => setTheme('Математика')} className="button2" type="button">Математика</button>
          <button onClick={() => setTheme('Физика')} className="button2" type="button">Физика</button>
          <button onClick={() => setTheme('Анг. язык')} className="button2" type="button">Анг. язык</button>
          <button onClick={() => setTheme('Литература')} className="button2" type="button">Литература</button>
        </p>
        <p>
          <label htmlFor="needScore">Колличество очков необходимых для доступа: </label>
          <input required onChange={changeInput} type="text" name="needScore" id="needScore" value={needScore} />
        </p>
        <button className="button" type="submit">Сохранить изменения</button>
      </form>
    </div>
  );
}

export default Config;

// const taskListCategori = ['Математика', 'Химия', 'Физика'];
// const dispatch = useDispatch();
// const history = useHistory();

// function sendCatego(category) {
//   dispatch(sendCategory(category));
//   history.push('/tasks');
// }
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
