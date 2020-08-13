import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import SingIn from './singin';
import Login from './login';
import Logout from './logout';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function App() {
  const auth = JSON.parse(window.localStorage.getItem('auth'));

  return (
    <Provider store={store}>
      <Router>
        <header className="header">
          {(auth)
            ? <div><Link to="/logout">Выйти</Link></div>
            : (
              <>
                <div><Link to="/login">Войти</Link></div>
                <div><Link to="/singin">Зарегистрироваться</Link></div>
              </>
            )}
        </header>
        <Switch>
          <Route path="/" />
        </Switch>
        <Switch>
          <Route path="/singin">
            <SingIn />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
