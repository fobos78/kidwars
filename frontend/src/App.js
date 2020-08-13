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
<<<<<<< HEAD
          <Route path="/" />
        </Switch>
        <Switch>
          <Route path="/singin">
            <SingIn />
=======
          <Route path="/">
            hello
>>>>>>> e3b3b4112eb75d987a7a1f0c2882d9fb699bece9
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
