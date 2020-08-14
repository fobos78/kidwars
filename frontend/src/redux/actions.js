import { SUCCESS_AUTH } from './actionsType';

export function auth(user) {
  return {
    type: SUCCESS_AUTH,
    payload: user,
  };
}

export function auth1(user) {
  return {
    type: SUCCESS_AUTH,
    payload: user,
  };
}
