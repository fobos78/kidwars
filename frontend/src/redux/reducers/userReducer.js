import { SUCCESS_AUTH, LOGOUT } from '../actionsType';

const init = {
  email: JSON.parse(window.localStorage.getItem('userEmail')) || '',
  auth: JSON.parse(window.localStorage.getItem('auth')) || false,
};

export default function reducer(state = init, action) {
  switch (action.type) {
    case SUCCESS_AUTH:
      return {
        ...state,
        ...action.payload,
        auth: true,
      };
    case LOGOUT:
      return {
        ...state,
        auth: false,
      };
    default: return state;
  }
}
