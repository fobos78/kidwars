import React, { useState, useEffect } from 'react';

function Tasks() {

  const [task, setTask] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch('/tasks', {
      });
      const result = await response.json();
    })();
  }, []);

  return (
    <>
      Tasks
    </>
  );
}

export default Tasks;
