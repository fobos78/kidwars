/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';

function Tasks() {
  const [task, setTask] = useState([]);
  const [themeTask, setThemeTask] = useState('');
  const [question, setQuestion] = useState('');
  const [flag, setFlag] = useState('');
  const [count, setCount] = useState(0);

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
      setCount(count + 1);
      e.target.parentNode.remove();
    } else {
      setFlag('Ответ не верный!');
    }
  }

  return (
    <>
      <div>
        Тема урока:
        {' '}
        {themeTask}
      </div>
      <div>
        Колличество очков:
        {' '}
        {count}
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
