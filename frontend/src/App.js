/* eslint-disable import/extensions */
import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Config from './Components/Config';
import Footer from './Components/Footer';
import Main from './Components/Main';
import SingIn from './Components/Signin';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Header from './Components/Header';
import NewTask from './Components/NewTask';
import Game from './Components/Game';
import Tasks from './Components/Tasks';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="mainWindow">
          <Switch>
            <Route path="/config">
              <Config />
            </Route>
            <Route path="/singin">
              <SingIn />
            </Route>
            <Route path="/task">
              <NewTask />
            </Route>
            <Route path="/game">
              <Game />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
            <Route path="/tasks">
              <Tasks />
            </Route>
            <Main />
            <Route path="/" />
          </Switch>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
