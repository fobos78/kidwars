import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function NewTasks() {
  const [theme, setTheme] = useState('');
  const [сlassNumber, setСlassNumber] = useState('');
  const [fourth, setFourth] = useState('');
  const [question, setQuestion] = useState('');
  const [answerOptions, setAnswerOptions] = useState('');
  const [answerTrue, setAnswerTrue] = useState('');
  const [message, setMessage] = useState('');

  const creator = useSelector((state) => state.user.email);

  function getTheme(e) {
    setTheme(e.target.value);
  }

  function getСlassNumber(e) {
    setСlassNumber(e.target.value);
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
          сlassNumber,
          fourth,
          question,
          answerOptions: arrAnswerOptions,
          answerTrue,
          creator,
        }),
      });
      const resp = await responce.json();
      setMessage(resp);
    }
  }

  return (
    <>
      <Container>
        <Jumbotron>
          <Link to="/game">Перейти к заданиям</Link>
          <h1>Новое задание</h1>
          <form name="newTask" onSubmit={sendForm}>

            <label htmlFor="theme">
              {' '}
              Тема
              <input className="form-control" id="theme" onChange={getTheme} name="theme" type="text" value={theme} required />
            </label>
            <br />

            <label htmlFor="classNumber">
              {' '}
              Класс
              <input className="form-control" id="classNumber" onChange={getСlassNumber} name="classNumber" type="text" value={сlassNumber} required />
            </label>
            <br />

            <label htmlFor="fourth">
              {' '}
              Четверть
              <select className="form-control" id="fourth" onChange={getFourth} name="fourth" type="number" defaultValue={{ label: '1', value: 1 }} required>
                <option value="">укажите четверть</option>
                <option value="1">1</option>
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
              Варианты ответа (если они нужны, то перечислите их через запятую)
              <input className="form-control" id="answerOptions" onChange={getAnswerOptions} name="answerOptions" type="text" value={answerOptions} />
            </label>
            <br />

            <label htmlFor="answerTrue">
              {' '}
              Привильный ответ
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
