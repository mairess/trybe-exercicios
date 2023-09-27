import { CharacterType } from '../../types';
import { REQUEST_API, GET_INFOS } from '../actions';

const INITIAL_STATE = {
  name: '',
  gender: '',
  culture: '',
  born: '',
  died: '',
  titles: [],
  isLoading: false,
};

type ActionType = {
  type: string,
  payload: CharacterType,
};

function gallery(state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isLoading: true,
      };
    case GET_INFOS:
      return {
        ...state,
        name: action.payload.name,
        gender: action.payload.gender,
        culture: action.payload.culture,
        born: action.payload.born,
        died: action.payload.died,
        titles: action.payload.titles,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default gallery;
