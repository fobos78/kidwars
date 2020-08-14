import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//import thunk from 'redux-thunk';

import userReducer from './reducers/userReducer';
import taskReducer from './reducers/taskReducer';

const store = createStore(
  combineReducers({ task: taskReducer, user: userReducer }),
  composeWithDevTools(
    applyMiddleware(),
  ),
);

export default store;
