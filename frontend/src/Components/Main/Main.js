import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  fadeIn, bounce, flash, flip, jello, zoomInUp,
} from 'react-animations';

import './Main.css';// background: linear-gradient( rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.5) ), url('/img/back/home-back.jpg');

function Main() {
  // const Bounce1 = styled.div`animation: 10s ${keyframes`${flip}`}`;
  const Bounce = styled.div`animation: 3s ${keyframes`${zoomInUp}`}`;

  return (
    <>
      <div className="Main" style={{ backgroundImage: 'linear-gradient( rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.5) ), url(/img/6.gif)' }}>
        {/* <Bounce1> */}
        <Bounce>
          {/* <p className="kid">KID WARS</p> */}
          {' '}
          <div style={{ backgroundImage: 'url(/img/2.png)' }} className="imgLogo" />
        </Bounce>
        {/* </Bounce1> */}
      </div>
    </>
  );
}

export default Main;
