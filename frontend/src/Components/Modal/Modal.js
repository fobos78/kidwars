/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Modal.css';

function Modal({ flag, setFlag }) {

  const [textError, setTextError] = useState('');
  const userEmail = useSelector((state) => state.user.email);

  async function changeFlag(event) {
    event.preventDefault();
    const password = event.target.input.value;

    const response = await fetch('/config/access', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userEmail,
        password,
      }),
    });
    const result = await response.json();
    if (result.password) {
      setFlag(!flag);
    }
    setTextError('Неверный пароль');
  }

  return (
    <div className="bodyAllModal">
      <div className="Modal">
        <br />
        <p className="TextConfig">Для доспупа к настройкам введите пароль</p>
        <form className='modalform' onSubmit={changeFlag}>
          <input className="form-control" type="password" name="input" />
          <br />
          <button className="btn btn-primary" type="submit">Подтвердить пароль</button>
          <br />
        </form>
        <br />
        <p className="TextError">
          {textError}
        </p>
      </div>
    </div>
  );
}

export default Modal;
