import {
  SUCCESS_AUTH, LOGOUT, ADD_SCORE, SEND_CATEGORY,
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

export function (category) {
  return {
    type: SEND_CATEGORY,
    category,
  };
}
