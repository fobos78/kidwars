import { SUCCESS_AUTH, ADD_SCORE } from './actionsType';

export function auth(user) {
  return {
    type: SUCCESS_AUTH,
    payload: user,
  };
}

export function addScore(score) {
  return {
    type: ADD_SCORE,
    payload: score,
  };
}
