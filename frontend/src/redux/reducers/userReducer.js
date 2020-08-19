import {
  SUCCESS_AUTH, LOGOUT, ADD_SCORE, NEWDATE, CHANGEFLAG, ADDSCORE, LOCK_ACCESS,
} from '../actionsType';

const init = {
  email: JSON.parse(window.localStorage.getItem('userEmail')) || '',
  auth: JSON.parse(window.localStorage.getItem('auth')) || false,
  access: {
    flag: JSON.parse(window.localStorage.getItem('accessFlag')) || false,
    date: JSON.parse(window.localStorage.getItem('date')) || '00.00.0000',
  },
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
    case NEWDATE:
      return {
        ...state,
        access: {
          ...state.access,
          date: action.date,
          flag: false,
        },
      };
    case CHANGEFLAG:
      return {
        ...state,
        access: {
          ...state.access,
          date: state.access.date,
          flag: true,
        },
      };
    case ADDSCORE:
      return {
        ...state,
        score: action.payload,
      };
    case LOCK_ACCESS:
      return {
        ...state,
        email: '',
        auth: false,
        access: {
          flag: false,
          date: '00.00.0000',
        },
        score: 0,
      };
    default: return state;
  }
}
