import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  fadeIn, bounce, flash, flip, jello, zoomInUp
} from 'react-animations';

import './Main.css';//background: linear-gradient( rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.5) ), url('/img/back/home-back.jpg');

function Main() {
 // const Bounce1 = styled.div`animation: 10s ${keyframes`${flip}`}`;
  const Bounce = styled.div`animation: 6s ${keyframes`${zoomInUp}`}`;

  return (
    <>
      <div className="Main" style={{ backgroundImage: 'linear-gradient( rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.5) ), url(/img/6.gif)' }}>
        {/* <Bounce1> */}
          <Bounce>
            {/* <p className="kid">KID WARS</p> */}
            {' '}
            <div style={{ backgroundImage: 'url(/img/7.gif)' }} className="imgLogo" />
          </Bounce>
        {/* </Bounce1> */}
        {/* <h1>Информация о приложении</h1>
        <p> Уважаемые родители! Если у вас в силу вашей работы абсолютно нет свободного времени. Нет возможности находиться дома, заниматься образованием и контралировать успеваемость вашего горячо любимого ребёнка - тогда наше приложение для вас. </p>
        <p>Высококвалифицированные специалисты нашей команды разработали уникальную программу обучения для вашего чада. 25 тысяч тщательно отобранных задач в разных дисциплинах помогут ребёнку лучшить свою успеваемость в школе, а так же расширить свой кругозор.</p>
        <p>Вы же в свою очередь сможете следить за обучением и результатами вашего ребёнка даже не находясь рядом с ним. К тому же вы сами можете скоректировать программу, и сами выбрать те котегории в которых ваш ребёнок меньше всего подготовлен или требует большей пoгруженности</p> */}
      </div>
    </>
  );
}

export default Main;
