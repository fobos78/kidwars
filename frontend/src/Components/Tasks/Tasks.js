/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
//import { remote } from 'electron';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addScore } from '../../redux/actions';

//const electron = window.require("electron")
const { remote } = window.require('electron');
const { app } = remote;

function Tasks() {
  const [task, setTask] = useState([]);
  const [themeTask, setThemeTask] = useState('');
  const [question, setQuestion] = useState('');
  const [flag, setFlag] = useState('');

  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  useEffect(() => {
    (async () => {
      const response = await fetch('/tasks', {
      });
      const result = await response.json();
      setTask(result);
      setThemeTask(Object.values(result[0].theme));
    })();
  }, []);

  function answer(event) {
    event.preventDefault();
    event.persist();
    setQuestion(() => event.target.innerText);
  }

  function answerTrue(ans, ansTrue, e) {
    if (ans === ansTrue) {
      setFlag('Верный ответ!');
      dispatch(addScore(userState.score + 1));
      e.target.parentNode.remove();
    } else {
      setFlag('Ответ не верный!');
    }
  }

  return (
    <>
    <button onClick={() => {app.quit()}}>Закрыть электрон</button>
      <div>
        Тема урока:
        {' '}
        {themeTask}
      </div>
      <div>
        Колличество очков:
        {' '}
        {userState.score}
      </div>
      <div>
        {task.map((elem, i) => (
          <div key={elem._id}>
            <br />
            <div>{`Вопрос №${i + 1}:`}</div>
            {elem.question}
            {' '}
            ?
            <br />
            <button type="submit" onClick={(e) => { answer(e); answerTrue(e.target.innerText, elem.answerTrue, e); }}>{elem.answer1}</button>
            <button type="submit" onClick={(e) => { answer(e); answerTrue(e.target.innerText, elem.answerTrue, e); }}>{elem.answer2}</button>
            <button type="submit" onClick={(e) => { answer(e); answerTrue(e.target.innerText, elem.answerTrue, e); }}>{elem.answer3}</button>
          </div>
        ))}
      </div>
      <br />
      {flag && <div>{flag}</div>}
    </>
  );
}

export default Tasks;
