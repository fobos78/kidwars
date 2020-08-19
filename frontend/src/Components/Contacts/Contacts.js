/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import './Contacts.css';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

function Contacts({ flagContacts, setFlagContacts }) {
  const Fadein = styled.div`animation: 2.5s ${keyframes`${fadeIn}`}`;
  return (
    <>
      <Fadein>
        <div className="Contacts">
          <h1>Контакты</h1>
          <button className="close" onClick={() => setFlagContacts(!flagContacts)} type="button">Закрыть</button>
          Мы на карте Москвы
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae4c79c67dd767905e0c7ce6387254f3d9a4a6d18f3b049b6a31e6a81ce449fe7&amp;source=constructor" width="800" height="400" frameBorder="0" />
          <div className="net">
            <p>
              Контактный телефон:
              8(900) 500-00-00
            </p>
            <a href="https://instagram.com/elbrus.bootcamp?igshid=budzhhlq4hp5" target="blank"><div style={{ backgroundImage: 'url(/img/insta.jpeg)' }} className="insta" /></a>

            <a href="https://vk.com/elbrusbootcamp" target="blank">
              {' '}
              <div style={{ backgroundImage: 'url(/img/VK.png)' }} className="vk" />
            </a>
            <p>
              {' '}
              Безконтактный телефон:
              8(900) 300-00-00
            </p>

          </div>
        </div>
      </Fadein>
    </>
  );
}

export default Contacts;
