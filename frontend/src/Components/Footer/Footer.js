import React, { useState } from 'react';
import './Footer.css';
import About from '../About';
import Contacts from '../Contacts';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

function Footer() {
  const Fadein = styled.div`animation: 2.5s ${keyframes`${fadeIn}`}`;
  const [flagCompany, setFlagCompany] = useState(false);
  const [flag, setFlag] = useState(false);

  return (
    <div className="Footer">
      {flagCompany && <About flagCompany={flagCompany} setFlagCompany={setFlagCompany} />}

      <button className="butt" type="button" onClick={() => { setFlagCompany(!flagCompany); setFlag(false) }}>O компании</button>
      {/* & nbsp;& nbsp;& nbsp; */}
      {flag && <Contacts flag={flag} setFlag={setFlag} />}

      <button className="butt" type="button" onClick={() => { setFlag(!flag); setFlagCompany(false) }}>Контакты</button>
    </div >
  );
}

export default Footer;
