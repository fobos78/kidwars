/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import './Contacts.css';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

function Contacts({ flag, setFlag }) {
  const Fadein = styled.div`animation: 2.5s ${keyframes`${fadeIn}`}`;
  return (
    <>
      <div className="Contacts">
        <div onClick={() => setFlag(!flag)} className="exit"> &#10008; </div>
        <Fadein>

          <h1>Контакты</h1>

          <h3>Мы на карте Москвы</h3>
          <iframe className="card" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae4c79c67dd767905e0c7ce6387254f3d9a4a6d18f3b049b6a31e6a81ce449fe7&amp;source=constructor" width="800" height="400" frameBorder="0" />
          <div className="net">
            <div className="Adres">
              <div>
                &#9742; Контактный телефон:
                8(900) 500-00-00
              </div>
              <div>
                &#9993; Email: kid-wars@gmail.com
              </div>
              <div>
                &#9875; Адрес:&nbsp; г.Москва, ул.Вавилова 1
              </div>
            </div>
            <a href="https://instagram.com/elbrus.bootcamp?igshid=budzhhlq4hp5" target="blank"><div style={{ backgroundImage: 'url(/img/insta.png)' }} className="insta" /></a>

            <a href="https://vk.com/elbrusbootcamp" target="blank">
              {' '}
              <div style={{ backgroundImage: 'url(/img/VK.png)' }} className="vk" />
            </a>
            <a href="https://t.me/fobos111_bot" target="blank"><div style={{ backgroundImage: 'url(/img/telega.jpeg)' }} className="telega" /></a>
          </div>
        </Fadein>
      </div>
    </>
  );
}

export default Contacts;
