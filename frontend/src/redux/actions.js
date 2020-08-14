import { SUCCESS_AUTH, LOGOUT } from './actionsType';

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

export function auth1(user) {
  return {
    type: SUCCESS_AUTH,
    payload: user,
  };
}
