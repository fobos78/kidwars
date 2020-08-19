import React from 'react';
import './About.css';
import styled, { keyframes } from 'styled-components';
import {
  fadeIn, bounce, flash, flip, jello,
} from 'react-animations';

function About({ flagCompany, setFlagCompany }) {
  const Bounce = styled.div`animation: 2.5s ${keyframes`${fadeIn}`}`;
  return (
    <>
      <Bounce>
        <div className="About">
          <button className="close" onClick={() => setFlagCompany(!flagCompany)} type="button">Закрыть</button>

          <h1>Информация о приложении</h1>
          <p> Уважаемые родители! Если у вас в силу вашей работы абсолютно нет свободного времени. Нет возможности находиться дома, заниматься образованием и контралировать успеваемость вашего горячо любимого ребёнка - тогда наше приложение для вас. </p>
          {/* <div style={{ backgroundImage: 'url(/img/boy2.jpg)' }} className="boy2" /> */}

          <p>Высококвалифицированные специалисты нашей команды разработали уникальную программу обучения для вашего чада. 25 тысяч тщательно отобранных задач в разных дисциплинах помогут ребёнку лучшить свою успеваемость в школе, а так же расширить свой кругозор.</p>
          {/* <div style={{ backgroundImage: 'url(/img/rebenok.jpg)' }} className="rebenok" /> */}
          <p>Вы же в свою очередь сможете следить за обучением и результатами вашего ребёнка даже не находясь рядом с ним. К тому же вы сами можете скоректировать программу, и сами выбрать те котегории в которых ваш ребёнок меньше всего подготовлен или требует большей пoгруженности</p>
        </div>
      </Bounce>
    </>
  );
}

export default About;
