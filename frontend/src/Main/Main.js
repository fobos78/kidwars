import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

import './Main.css';

function Main() {
  const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`}`;

  return (
    <>
      <div className="Main">
        <Bounce>
          {' '}
          <div style={{ backgroundImage: 'url(/img/1.gif)' }} className="imgLogo" />
        </Bounce>
      </div>
    </>
  );
}

export default Main;
