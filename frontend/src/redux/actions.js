import { ADD_SCORE } from './actionsType';

export function addScore(data) {
  return {
    type: ADD_SCORE,
    payload: data,
  };
}
