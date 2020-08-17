import { GET_INFO_CONFIG } from '../actionsType';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case GET_INFO_CONFIG:
      return action.category;
    default: return state;
  }
}
