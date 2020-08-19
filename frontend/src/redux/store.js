import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './reducers/userReducer';
import taskReducer from './reducers/taskReducer';
import gameReducer from './reducers/gameReduser';
import getInfoConfig from './reducers/getInfoConfig';

const store = createStore(
  combineReducers({
    task: taskReducer, user: userReducer, info: getInfoConfig, game: gameReducer,
  }),
  composeWithDevTools(
    applyMiddleware(),
  ),
);

export default store;
