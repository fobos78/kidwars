import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import SingIn from './singin';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" />
        </Switch>
        <Switch>
          <Route path="/singin">
            <SingIn />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
