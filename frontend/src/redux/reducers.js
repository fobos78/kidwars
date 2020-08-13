import { ADD_SCORE } from './actionsType';

const init = {
  score: 0,
};

export default function reducer(state = init, action) {
  switch (action.type) {
    case ADD_SCORE: return { ...state, score: action.payload };
    default: return state;
  }
}
