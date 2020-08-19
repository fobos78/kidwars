import { SUCCESS_AUTH1 } from '../actionsType';

const init = {
  score: 0,
};

export default function reducer(state = init, action) {
  switch (action.type) {
    case SUCCESS_AUTH1: return { ...state, score: action.payload };
    default: return state;
  }
}
