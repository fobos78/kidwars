import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Jumbotron, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { auth } from '../../redux/actions';

function SingIn() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setLogin] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [kidName, setKidName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function getEmail(e) {
    setLogin(e.target.value);
  }
  function getName(e) {
    setName(e.target.value);
  }
  function getSurname(e) {
    setSurname(e.target.value);
  }
  function getKidName(e) {
    setKidName(e.target.value);
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
        name,
        surname,
        password,
      }),
    });
    const resp = await responce.json();
    if (resp.message === 'success') {
      dispatch(auth(resp.user));
      history.push('/config');
      window.localStorage.setItem('auth', JSON.stringify(true));
      window.localStorage.setItem('userEmail', JSON.stringify(resp.user.email));
      window.localStorage.setItem('accessFlag', JSON.stringify(resp.user.access.flag));
      window.localStorage.setItem('date', JSON.stringify(resp.user.access.date));
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

            <label htmlFor="name">
              {' '}
              Ваше имя
              <input className="form-control" id="name" onChange={getName} name="name" type="text" value={name} required />
            </label>
            <br />

            <label htmlFor="surname">
              {' '}
              Фамилия
              <input className="form-control" id="surname" onChange={getSurname} name="surname" type="text" value={surname} required />
            </label>
            <br />

            <label htmlFor="kidName">
              {' '}
              Имя ребенка
              <input className="form-control" id="kidName" onChange={getKidName} name="kidName" type="text" value={kidName} required />
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
