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
  // console.log('userState', userState);

  useEffect(() => {
    setAuth(status);
  }, [status]);

  return (
    <div className="Header">

      {!auth ? (
        <>
          <div className="right">
            <span><Link to="/login">Вход</Link></span>
          &nbsp;&nbsp;/&nbsp;&nbsp;
            <span><Link to="/singin"> Регистрация</Link></span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </>
      ) : (
        <>
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
          <Link to="/game">

            <img src="./img/1.png" className="icon" alt="icon" />

          </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div>
            {/* <Link to="/">На главную</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
            <span><Link to="/config"> Личный кабинет</Link></span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </>
      )}
      {
        // еще одна строчка
        // access && <button className="btn btn-primary" onClick={() => { app.quit(); }}>X</button>
      }
    </div>
  );
}

export default Header;
