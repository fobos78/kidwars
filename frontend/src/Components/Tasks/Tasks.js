import React, { useEffect, useState } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const creator = useSelector((state) => state.user.email);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/task/${creator}`);
      const result = await response.json();
      console.log(result);
      setTasks(result);
    })();
  }, []);

  return (
    <>
      <Jumbotron>
        <Container>
          <div className="tasks">
            <h2>Ваши задания:</h2>
            <div>
              {tasks.map((task, index) => (
                <>
                  <div>
                    <b>
                      {index + 1}
                      {'. '}
                      {'Дисциплина - '}
                      {task.theme}
                      {', '}
                      {'Класс - '}
                      {task.classNumber}
                      {', '}
                      {'Четверть - '}
                      {task.fourth}
                      {', '}
                      {'Вопрос - '}
                      {task.question}
                      {', '}
                      {' Ответ '}
                      {task.answerTrue}
                      {' '}
                    </b>
                  </div>
                </>
              ))}
            </div>
          </div>
        </Container>
      </Jumbotron>
    </>
  );
}

export default Tasks;
