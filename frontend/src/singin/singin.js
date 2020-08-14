import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Jumbotron, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { auth } from '../redux/actions';

function SingIn() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setLogin] = useState('');
  const [kidName, setKidName] = useState('');
  const [kidClass, setKidClass] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function getEmail(e) {
    setLogin(e.target.value);
  }
  function getKidName(e) {
    setKidName(e.target.value);
  }
  function getKidClass(e) {
    setKidClass(e.target.value);
  }
  function getPass(e) {
    setPassword(e.target.value);
  }

  async function sendForm(e) {
    e.preventDefault();
    const responce = await fetch('api/singin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        kidName,
        kidClass,
        password,
      }),
    });
    const resp = await responce.json();
    if (resp.message === 'success') {
      console.log(resp.user);
      dispatch(auth(resp.user));
      history.push('/config');
      window.localStorage.setItem('auth', JSON.stringify(true));
      window.localStorage.setItem('userEmail', JSON.stringify(resp.user.email));
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
          <h1>Регистрация</h1>
          <form onSubmit={sendForm}>
            <label htmlFor="email">
              {' '}
              Email
              <input className="form-control" id="email" onChange={getEmail} name="email" type="email" value={email} required />
            </label>
            <br />
            <label htmlFor="kidName">
              {' '}
              Имя ребенка
              <input className="form-control" id="kidName" onChange={getKidName} name="kidName" type="text" value={kidName} required />
            </label>
            <br />
            <label htmlFor="kidClass">
              {' '}
              В каком классе ребенок?
              <input className="form-control" id="kidClass" onChange={getKidClass} name="kidClass" type="number" value={kidClass} required />
            </label>
            <br />
            <label htmlFor="password">
              {' '}
              Пароль
              <input className="form-control" id="password" onChange={getPass} name="password" type="password" value={password} required />
            </label>
            <br />
            <button className="btn btn-primary" type="submit">Зарегистрироваться</button>
          </form>
          <h2>{error}</h2>
        </Jumbotron>
      </Container>
    </>
  );
}

export default SingIn;
