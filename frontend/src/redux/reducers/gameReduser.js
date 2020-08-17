// import { SUCCESS_AUTH, LOGOUT, ADD_SCORE } from '../actionsType';

const init = {
  question: '',
  answer: '',
  questions: [],
  score: 0,
};

export default function reducer(state = init, action) {
  switch (action.type) {
    case 'newgame':
      return {
        ...state,
        question: action.question,
        answer: action.answer,
      };
    case 'right':
      return {
        ...state,
        score: state.score + action.score,
      };
    case 'wrong':
      return {
        ...state,
        score: state.score - action.score,
      };
    case 'answer':
      return {
        ...state,
        answer: action.answer,
      };
    case 'questions':
      return {
        ...state,
        questions: action.questions,
      };
    default: return state;
  }
}
