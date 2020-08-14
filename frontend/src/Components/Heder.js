import React from 'react';
import { Link } from 'react-router-dom';

function Heder() {
  return (
    <div>
      <Link to="/config"> Личный кабинет</Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/"> Войти</Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/"> Зарегистрироваться</Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/">На главную</Link>
      <hr />
    </div>
  );
}

export default Heder;
