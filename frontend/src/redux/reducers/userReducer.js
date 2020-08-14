import { SUCCESS_AUTH, LOGOUT, ADD_SCORE  } from '../actionsType';

const init = {
  email: JSON.parse(window.localStorage.getItem('userEmail')) || '',
  auth: JSON.parse(window.localStorage.getItem('auth')) || false,
  score: 0,
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
    case ADD_SCORE:
      return {
        ...state,
        score: action.payload,
        // ...action.payload,
      };
    default: return state;
  }
}
