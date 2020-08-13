import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import Tasks from './components/Tasks';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>

          <Route path="/tasks">
            <Tasks />
          </Route>

        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
