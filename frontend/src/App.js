import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import './App.css';
import Config from './Componets/Config';
import Heder from './Componets/Heder'

function App() {
  return (
    <>
    <Heder />
      <Config />
    </>
  );
}

export default App;
