/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Footer.css';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import About from '../About';
import Contacts from '../Contacts';
import Video from '../Video';

function Footer() {
  const Fadein = styled.div`animation: 2.5s ${keyframes`${fadeIn}`}`;
  const [flagCompany, setFlagCompany] = useState(false);
  const [flag, setFlag] = useState(false);
  const [video, setVideo] = useState(false);

  return (
    <div className="Footer">
      {flagCompany && <About flagCompany={flagCompany} setFlagCompany={setFlagCompany} />}

      <button className="btn btn-link" type="button" onClick={() => { setFlagCompany(!flagCompany); setFlag(false); setVideo(false); }}>O компании</button>
      {/* & nbsp;& nbsp;& nbsp; */}
      {flag && <Contacts flag={flag} setFlag={setFlag} />}

      <button className="btn btn-link" type="button" onClick={() => { setFlag(!flag); setFlagCompany(false); setVideo(false); }}>Контакты</button>

      {video && <Video video={video} setVideo={setVideo} />}

      <button className="btn btn-link" type="button" onClick={() => { setVideo(!video); setFlagCompany(false); setFlag(false); }}>Видео иструкция</button>

    </div>
  );
}

export default Footer;
