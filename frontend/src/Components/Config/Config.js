import React, { useState } from 'react';
import './Config.css';

function Config() {
  const allTasks = [
    {
      catigori: 'Maтематика',
      qwesList: [
        {
          qwes: 'Вопрос по матиматике 1',
          ans: 'Ответ 1',
        },
        {
          qwes: 'Вопрос по матиматике 2',
          ans: 'Ответ 2',
        },
        {
          qwes: 'Вопрос по матиматике 3',
          ans: 'Ответ 3',
        },
        {
          qwes: 'Вопрос по матиматике 4',
          ans: 'Ответ 1',
        },
      ],
    },
    {
      catigori: 'Физика',
      qwesList: [
        {
          qwes: 'Вопрос по Физикe 1',
          ans: 'Ответ 1',
        },
        {
          qwes: 'Вопрос по Физике 2',
          ans: 'Ответ 2',
        },
        {
          qwes: 'Вопрос по Физике 3',
          ans: 'Ответ 3',
        },
        {
          qwes: 'Вопрос по Физике 4',
          ans: 'Ответ 4',
        },
      ],
    },
    {
      catigori: 'химия',
      qwesList: [
        {
          qwes: 'Вопрос по химии 1',
          ans: 'Ответ 1',
        },
        {
          qwes: 'Вопрос по химии 2',
          ans: 'Ответ 2',
        },
        {
          qwes: 'Вопрос по химии 3',
          ans: 'Ответ 3',
        },
        {
          qwes: 'Вопрос по химии 4',
          ans: 'Ответ 1',
        },
      ],
    },
    {
      catigori: 'Информатика',
      qwesList: [
        {
          qwes: 'Вопрос по Информатике 1',
          ans: 'Ответ 1',
        },
        {
          qwes: 'Вопрос по Информатике 2',
          ans: 'Ответ 2',
        },
        {
          qwes: 'Вопрос по Информатике 3',
          ans: 'Ответ 3',
        },
        {
          qwes: 'Вопрос по Информатике 4',
          ans: 'Ответ 1',
        },
      ],
    }];

  const [task, setTask] = useState({});

  function choiceCategori(categori) {
    const taskCategori = allTasks.find((task) => task.catigori === categori);
    setTask(taskCategori);
    console.log(taskCategori, "%%%%%%%%%%%%%");
  }
  
  return (

    <div className="Config">
      <h1>Личный кабинет</h1>
      {' '}
      <span>Баллы: 10</span>
      <h3>Выберете Дисциплину</h3>
      <button onClick={() => choiceCategori('Математика')} type="button">Maтематика</button>
      &nbsp;
      <button onClick={() => choiceCategori('Физика')} type="button">Физика</button>
      &nbsp;
      <button type="button">Химия</button>
      &nbsp;
      <button type="button">Информатика</button>
      <p />
    </div>
  );
}

export default Config;
