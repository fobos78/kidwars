import { SUCCESS_AUTH, SEND_CATEGORY } from './actionsType';

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

export function sendCategory(category) {
  return {
    type: SEND_CATEGORY,
    category,
  };
}
