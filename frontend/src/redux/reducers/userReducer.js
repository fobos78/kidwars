import { SUCCESS_AUTH, ADD_SCORE } from '../actionsType';

const init = { email: 'a@a.a', score: 0 };

export default function reducer(state = init, action) {
  switch (action.type) {
    case SUCCESS_AUTH:
      return {
        ...state,
        ...action.payload,
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
