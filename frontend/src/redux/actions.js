import {
  SUCCESS_AUTH, LOGOUT, ADD_SCORE, SEND_CATEGORY, NEWDATE, CHANGEFLAG, CLEANSCORE,
} from './actionsType';

export function auth(user) {
  return {
    type: SUCCESS_AUTH,
    payload: user,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function addScore(score) {
  return {
    type: ADD_SCORE,
    payload: score,
  };
}

export function sendCategory(category) {
  return {
    type: SEND_CATEGORY,
    category,
  };
}

export function addNewDate(date) {
  return {
    type: NEWDATE,
    date,
  };
}

export function changeFlag() {
  return {
    type: CHANGEFLAG,
  };
}

export function clearScore() {
  return {
    type: CLEANSCORE,
  };
}
