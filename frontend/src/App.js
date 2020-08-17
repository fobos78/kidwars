import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Config from './Components/Config';
import Footer from './Footer';
import Main from './Main';
import SingIn from './singin';
import Login from './login';
import Logout from './logout';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import NewTask from './newTask';
import Game from './game';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/config">
            <Config />
          </Route>
          <Route path="/singin">
            <SingIn />
          </Route>
          <Route path="/tasks">
            <Tasks />
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
          <Main />
          <Route path="/" />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
