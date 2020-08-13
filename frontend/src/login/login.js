import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// import { useSelector, useDispatch } from 'react-redux';

function Login() {
  // const dispatch = useDispatch();
  const history = useHistory();
  const auth = JSON.parse(window.localStorage.getItem('auth'));

  useEffect(() => {
    if (auth) {
      history.push('/');
    }
  }, [auth]);

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
      // dispatch({ type: 'success_login', email: resp.userEmail });
      history.push('/task');
      window.localStorage.setItem('auth', JSON.stringify(true));
      window.localStorage.setItem('userEmail', JSON.stringify(resp.userEmail));
    } else {
      setError(resp.message);
      setLogin('');
      setPassword('');
    }
  }

  return (
    <>
      <h1>Вход</h1>
      <form onSubmit={sendForm}>
        <label htmlFor="email">
          {' '}
          Email
          <input id="email" onChange={getEmail} name="email" type="email" value={email} required />
        </label>
        <br />
        <label htmlFor="password">
          {' '}
          Пароль
          <input id="password" onChange={getPass} name="password" type="password" value={password} required />
        </label>
        <br />
        <button type="submit">Войти</button>
      </form>
      <h2>{error}</h2>
    </>
  );
}

export default Login;
