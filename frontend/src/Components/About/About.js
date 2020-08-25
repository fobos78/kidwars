/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './About.css';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

function About({ flagCompany, setFlagCompany }) {
  const Bounce = styled.div`animation: 1s ${keyframes`${fadeIn}`}`;
  return (
    <>
      <Bounce>
        <div className="About">
          <div onClick={() => setFlagCompany(!flagCompany)} className="exit2"> &#10008; </div>

          <h1>Информация о приложении</h1>
          <p>
            В современном мире дети проводят за компьютерными играми огромное количество времени, а ведь компьютер можно и нужно использовать и в других целях.
            Мы создали приложение, благодаря которому, теперь, прежде чем поиграть в любимую игру вашему ребёнку придётся немного потрудится и порешать развивающие задачки
            {' '}
          </p>
          {/* <p> Уважаемые родители! Если у вас в силу вашей работы абсолютно нет свободного времени. Нет возможности находиться дома, заниматься образованием и контралировать успеваемость вашего горячо любимого ребёнка - тогда наше приложение для вас. </p> */}
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
