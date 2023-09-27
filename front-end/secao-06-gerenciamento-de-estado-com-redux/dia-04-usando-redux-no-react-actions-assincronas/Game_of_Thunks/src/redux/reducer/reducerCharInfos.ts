import { CharacterType } from '../../types';
import { REQUEST_API, GET_INFOS, SEARCH_ERROR } from '../actions';

const INITIAL_STATE = {
  name: '',
  gender: '',
  culture: '',
  born: '',
  died: '',
  titles: [] as string[],
  aliases: [] as string[],
  isLoading: false,
  error: null as null | string,
};

type ActionType = {
  type: string,
  payload: CharacterType,
};

function reducerCharInfos(state = INITIAL_STATE, action: ActionType) {
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
        aliases: action.payload.aliases,
        isLoading: false,
        error: null,
      };
    case SEARCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error || 'erro desconhecido',
      };
    default:
      return state;
  }
}

export default reducerCharInfos;
