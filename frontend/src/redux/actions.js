import {
  SUCCESS_AUTH, LOGOUT, ADD_SCORE, NEWDATE, CHANGEFLAG, CLEANSCORE, ADDSCORE, LOCK_ACCESS,
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

export function addTotalScore(score) {
  return {
    type: ADDSCORE,
    payload: score,
  };
}

export function lockAccess() {
  return {
    type: LOCK_ACCESS,
  };
}
