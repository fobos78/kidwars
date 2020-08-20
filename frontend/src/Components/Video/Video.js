/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
// import './Video.css';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

function Video({ video, setVideo }) {
  const Fadein = styled.div`animation: 2.5s ${keyframes`${fadeIn}`}`;
  return (
    <>
      <div className="Contacts">
        <div onClick={() => setVideo(!video)} className="exit"> &#10008; </div>
        <Fadein>

          <iframe width="900" height="650" src="https://www.youtube.com/embed/KOROgIcJ5kY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </Fadein>
      </div>
    </>
  );
}

export default Video;
