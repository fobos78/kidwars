import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';


// При запуске в Электроне раскоментировать 3 строки со звездачками
// const { remote } = window.require('electron');
// const { app } = remote;

function Header() {
  const status = useSelector((state) => state.user.auth);
  const [auth, setAuth] = useState(status);
  const userState = useSelector((state) => state);
  const access = useSelector((state) => state.user.access.flag);
  console.log('userState', userState);

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
      <Link to="/task">Добавить задание</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
      {
        // access && <button onClick={() => { app.quit() }}>Х</button>
      }
    </div>
  );
}

export default Header;
