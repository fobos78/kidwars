/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { sendCategory } from '../../redux/actions';
import './Config.css';

function Config() {
  const [classNumber, setClassNumber] = useState(1);
  const [fourth, setFourth] = useState(1);
  const [theme, setTheme] = useState('Математика');
  const [needScore, setNeedScore] = useState('');
  const [info, setInfo] = useState({});

  const userEmail = useSelector((state) => state.user.email);

  function changeInput(event) {
    setNeedScore(event.target.value);
  }


  async function sendConfig(event) {
    event.preventDefault();
    setNeedScore('');
    const response = await fetch('/config', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        config: {
          classNumber,
          fourth,
          theme,
        },
        needScore,
        userEmail,
      }),
    });
    const result = await response.json();
    setInfo(result.taskConfig);
  }

  useEffect(() => {
    (async () => {
      const response = await fetch(`/config/${userEmail}`);
      const result = await response.json();
      setInfo(result);
    })();
  }, [sendConfig]);

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
          <label htmlFor="needScore">Количество очков необходимых для доступа: </label>
          <input required onChange={changeInput} type="text" name="needScore" id="needScore" value={needScore} />
        </p>
        <button className="button" type="submit">Сохранить изменения</button>
      </form>
      <div>
        {info.userName}
        <br />
        {info.kidName}
        <br />
        {info.classNumber}
        <br />
        {info.fourth}
        <br />
        {info.theme}
        <br />
        {info.needScore}
        <br />
        {info.score}
      </div>
    </div>
  );
}

export default Config;
