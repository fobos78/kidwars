import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Jumbotron, Container } from 'react-bootstrap';
import { auth } from '../../redux/actions';
import { useDispatch } from 'react-redux';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const authLS = JSON.parse(window.localStorage.getItem('auth'));

  useEffect(() => {
    if (authLS) {
      history.push('/');
    }
  }, [authLS, history]);

  const [email, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function getEmail(e) {
    setLogin(e.target.value);
  }
  function getPass(e) {
    setPassword(e.target.value);
  }

  async function sendForm(e) {
    e.preventDefault();
    const responce = await fetch('api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const resp = await responce.json();
    if (resp.message === 'success') {
      dispatch(auth(resp.user));
      window.localStorage.setItem('auth', JSON.stringify(true));
      window.localStorage.setItem('userEmail', JSON.stringify(resp.user.email));
      window.localStorage.setItem('accessFlag', JSON.stringify(resp.user.access.flag));
      window.localStorage.setItem('date', JSON.stringify(resp.user.access.date));
      history.push('/game');
    } else {
      setError(resp.message);
      setLogin('');
      setPassword('');
    }
  }

  return (
    <>
      <Container>
        <Jumbotron>
          <h1>Вход</h1>
          <form onSubmit={sendForm}>
            <label htmlFor="email">
              {' '}
              Email
              <input className="form-control" id="email" onChange={getEmail} name="email" type="email" value={email} required />
            </label>
            <br />
            <label htmlFor="password">
              {' '}
              Пароль
              <input className="form-control" id="password" onChange={getPass} name="password" type="password" value={password} required />
            </label>
            <br />
            <button className="btn btn-primary" type="submit">Войти</button>
          </form>
          <h2>{error}</h2>
        </Jumbotron>
      </Container>
    </>
  );
}

export default Login;
