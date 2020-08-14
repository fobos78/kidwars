import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import Heder from './Components/Heder';
import Config from './Components/Config';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Heder />
        <Switch>
          <Route path="/config">
            <Config />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
