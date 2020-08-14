import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const auth = JSON.parse(window.localStorage.getItem('auth'));
  return (
    <div className="Header">
      {!auth ? (
        <>
          <span><Link to="/singin"> Зарегистрироваться</Link></span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span><Link to="/login">Войти</Link></span>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </>
      ) : (
        <>
          <span><Link to="/logout">Выход</Link></span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span><Link to="/config"> Личный кабинет</Link></span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </>
      )}
      <Link to="/">На главную</Link>
    </div>
  );
}

export default Header;
