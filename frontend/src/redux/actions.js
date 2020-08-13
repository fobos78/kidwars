import { ADD_SCORE } from './actonsType';

export function addScore(data) {
  return {
    type: ADD_SCORE,
    payload: data,
  };
}
