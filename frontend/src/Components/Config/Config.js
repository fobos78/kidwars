import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import './Config.css';
import Modal from '../Modal/Modal';

function Config() {
  const [info, setInfo] = useState({});
  const [classNumber, setClassNumber] = useState('');
  const [fourth, setFourth] = useState('');
  const [theme, setTheme] = useState('');
  const [needScore, setNeedScore] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    (async () => {
      const response = await fetch(`/config/${userEmail}`);
      const result = await response.json();
      setInfo(result);
      setClassNumber(result.classNumber);
      setFourth(result.fourth);
      setTheme(result.theme[0]);
      setNeedScore(result.needScore);
    })();
  }, []);
  const [flag, setFlag] = useState(true);

  const userEmail = useSelector((state) => state.user.email);

  function changeClassName(e) {
    setClassNumber(e.target.value);
  }

  function changeFourth(e) {
    setFourth(e.target.value);
  }

  function changeTheme(e) {
    setTheme(e.target.value);
  }

  function changeNeedScore(e) {
    setNeedScore(e.target.value);
  }

  async function sendConfig(event) {
    event.preventDefault();
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
    setMessage('Изменения приняты');
    setTimeout(() => { setMessage(''); }, 2000);
  }

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(`/config/${userEmail}`);
  //     const result = await response.json();
  //     setInfo(result);
  //   })();
  // }, [sendConfig]);

  return (
    <>
      {flag && <Modal flag={flag} setFlag={setFlag} />}
      <Container>
        <Jumbotron>
          <div><Link to="/logout">Выйти из учетной записи</Link></div>
          <div><Link to="/task"> Добавить задание </Link></div>
          <div className="Config">
            <h2>
              {' '}
              Настройки пользователя
              {` ${info.userName}`}
              <br />
              {message}
            </h2>
          </div>
          <form onSubmit={sendConfig} name="form">

            <label htmlFor="classNumber">
              Класс ученика
              <select required onChange={changeClassName} id="classNumber" name="classNumber" className="form-control">
                <option selected={info.classNumber === 1} value={1}>{1}</option>
                <option selected={info.classNumber === 2} value={2}>{2}</option>
                <option selected={info.classNumber === 3} value={3}>{3}</option>
              </select>
            </label>
            <br />

            <label htmlFor="fourth">
              Четверть
              <select required onChange={changeFourth} id="fourth" name="fourth" className="form-control">
                <option selected={info.fourth === 1} value={1}>{1}</option>
                <option selected={info.fourth === 2} value={2}>{2}</option>
                <option selected={info.fourth === 3} value={3}>{3}</option>
                <option selected={info.fourth === 4} value={4}>{4}</option>
              </select>
            </label>
            <br />

            <label htmlFor="theme">
              Дисциплина, которую
              {' '}
              {info.kidName}
              {' '}
              должен укрепить
              <select required onChange={changeTheme} id="theme" name="theme" className="form-control">
                <option selected={info.theme && info.theme[0] === 'Русский язык'} value="Русский язык">Русский язык</option>
                <option selected={info.theme && info.theme[0] === 'Природоведение'} value="Природоведение">Природоведение</option>
                <option selected={info.theme && info.theme[0] === 'Английский язык'} value="Английский язык">Английский язык</option>
                <option selected={info.theme && info.theme[0] === 'Математика'} value="Математика">Математика</option>
              </select>
            </label>
            <br />

            <label htmlFor="needScore">
              Количество очков необходимых для доступа:
              <input className="form-control" required onChange={changeNeedScore} type="text" name="needScore" id="needScore" value={needScore} />
            </label>
            <br />
            <button className="btn btn-primary" type="submit">Сохранить изменения</button>
          </form>
        </Jumbotron>
      </Container>

      {/* <div>
        {' '}
        Контроль
        <br />
        имя пользовалетя:
        {' '}
        {info.userName}
        <br />
        имя ребенка:
        {' '}
        {info.kidName}
        <br />
        класс:
        {' '}
        {info.classNumber}
        <br />
        четверть:
        {' '}
        {info.fourth}
        <br />
        Дисциплина:
        {' '}
        {info.theme}
        <br />
        Необходимые очки:
        {' '}
        {info.needScore}
        <br />
        Текущий счет:
        {' '}
        {info.score}
      </div> */}
    </>

  );
}

export default Config;
