import React, { useState } from 'react';
import './Footer.css';
import About from '../About';
import Contacts from '../Contacts';

function Footer() {
  const [flagCompany, setFlagCompany] = useState(false);
  const [flagContacts, setFlagContacts] = useState(false);

  return (
    <div className="Footer">
      {flagCompany && <About flagCompany={flagCompany} setFlagCompany={setFlagCompany} />}
      <button class="btn btn-link" type="button" onClick={() => setFlagCompany(!flagCompany)}>O приложении</button>
      &nbsp;&nbsp;&nbsp;
      {flagContacts && <Contacts flagContacts={flagContacts} setFlagContacts={setFlagContacts} />}
      <button class="btn btn-link" type="button" onClick={() => setFlagContacts(!flagContacts)}>Контакты</button>
    </div>
  );
}

export default Footer;
