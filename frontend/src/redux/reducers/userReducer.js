import { SUCCESS_AUTH } from '../actionsType';

const init = { };

export default function reducer(state = init, action) {
  switch (action.type) {
    case SUCCESS_AUTH:
      return {
        ...state,
        ...action.payload,
      };
    default: return state;
  }
}
