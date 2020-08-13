import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
        <Link to="/typeHere"> Личный кабинет</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/worms"> Список червей</Link>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/randomCat"> Котик</Link>
    </>
  );
}

export default App;
