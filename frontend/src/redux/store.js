import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './reducers/userReducer';
import taskReducer from './reducers/taskReducer';
import sendCategoryReduser from './reducers/sendCategoryReduser';

const store = createStore(
  combineReducers({ task: taskReducer, user: userReducer, category: sendCategoryReduser }),
  composeWithDevTools(
    applyMiddleware(),
  ),
);

export default store;
