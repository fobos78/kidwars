import React, { useState } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function NewTasks() {
  const [theme, setTheme] = useState('Русский язык');
  const [classNumber, setClassNumber] = useState('1');
  const [fourth, setFourth] = useState('1');
  const [question, setQuestion] = useState('');
  const [answerOptions, setAnswerOptions] = useState('');
  const [answerTrue, setAnswerTrue] = useState('');
  const [message, setMessage] = useState('');

  const creator = useSelector((state) => state.user.email);

  function getTheme(e) {
    setTheme(e.target.value);
  }

  function getClassNumber(e) {
    setClassNumber(e.target.value);
  }

  function getFourth(e) {
    setFourth(e.target.value);
  }

  function getQuestion(e) {
    setQuestion(e.target.value);
  }

  function getAnswerOptions(e) {
    setAnswerOptions(e.target.value);
  }

  function getAnswerTrue(e) {
    setAnswerTrue(e.target.value);
  }

  async function sendForm(e) {
    e.preventDefault();
    const arrAnswerOptions = answerOptions.replace(/\s+/g, '').trim().split(',');


    if (answerOptions && !arrAnswerOptions.includes(answerTrue)) {
      setMessage('нет правильного варианта ответа');
      setAnswerTrue('');
    } else {
      const responce = await fetch('/api/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          theme,
          classNumber,
          fourth,
          question,
          answerOptions: arrAnswerOptions,
          answerTrue,
          creator,
        }),
      });
      const resp = await responce.json();
      if (resp === 'success') {
        setMessage('Задание добавлено');
        setInterval(() => { setMessage(''); }, 1500);
      } else {
        setMessage('Не удалось добавить задание, попробуйте позже');
      }
    }
  }

  return (
    <>
      <Container>
        <Jumbotron>

          <h1>Новое задание</h1>
          <form name="newTask" onSubmit={sendForm}>

            {/* <label htmlFor="theme">
              {' '}
              Тема
              <input className="form-control" id="theme" onChange={getTheme} name="theme" type="text" value={theme} required />
            </label>
            <br /> */}

            <label htmlFor="theme">
              Дисциплина
              <select required onChange={getTheme} id="theme" name="theme" className="form-control">
                <option selected value="Русский язык">Русский язык</option>
                <option value="Окружающий мир">Окружающий мир</option>
                <option value="Английский язык">Английский язык</option>
                <option value="Математика">Математика</option>
              </select>
            </label>
            <br />

            {/* <label htmlFor="classNumber">
              {' '}
              Класс
              <input className="form-control" id="classNumber" onChange={getClassNumber} name="classNumber" type="text" value={classNumber} required />
            </label>
            <br /> */}

            <label htmlFor="classNumber">
              Класс ученика
              <select required onChange={getClassNumber} id="classNumber" name="classNumber" type="number" className="form-control">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </label>
            <br />

            <label htmlFor="fourth">
              {' '}
              Четверть
              <select className="form-control" id="fourth" onChange={getFourth} name="fourth" type="number" required>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </label>
            <br />

            <label htmlFor="question">
              {' '}
              Задание
              <textarea className="form-control" id="question" onChange={getQuestion} name="question" type="text" value={question} required />
            </label>
            <br />

            <label htmlFor="answerOptions">
              {' '}
              Перечислите варианты ответа через запятую
              <input className="form-control" id="answerOptions" onChange={getAnswerOptions} name="answerOptions" type="text" value={answerOptions} placeholder="если они нужны)" />
            </label>
            <br />

            <label htmlFor="answerTrue">
              {' '}
              Правильный ответ
              <input className="form-control" id="answerTrue" onChange={getAnswerTrue} name="answerTrue" type="text" value={answerTrue} required />
            </label>
            <br />

            <button className="btn btn-primary" type="submit">Создать</button>
          </form>
          <h2>{message}</h2>
        </Jumbotron>
      </Container>
    </>
  );
}

export default NewTasks;
