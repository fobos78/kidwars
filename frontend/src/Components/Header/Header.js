import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const status = useSelector((state) => state.user.auth);
  const [auth, setAuth] = useState(status);
  const access = useSelector((state) => state.user.access.flag);

  useEffect(() => {
    setAuth(status);
  }, [status]);

  return (
    <div className="Header">
      <div>
        {access
          ? (
            <>
              Доступ открыт
            </>
          )
          : (
            <>
              Доступ закрыт
            </>
          )}
      </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {!auth ? (
        <>
          <span><Link to="/login">Войти</Link></span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span><Link to="/singin"> Зарегистрироваться</Link></span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </>
      ) : (
        <>
          <Link to="/">На главную</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span><Link to="/config"> Личный кабинет</Link></span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/game">Задания</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span><Link to="/logout">Выход</Link></span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </>
      )}
    </div>
  );
}

export default Header;
