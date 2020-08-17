import {
  SUCCESS_AUTH, LOGOUT, ADD_SCORE, GET_INFO_CONFIG,
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

export function getInfoConfig(info) {
  return {
    type: GET_INFO_CONFIG,
    info,
  };
}
