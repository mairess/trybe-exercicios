import { REQUEST_API, GET_PICTURE } from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  imgURL: '',
  useDefaulting: true,
};

type ActionType = {
  type: string,
  payload: string,
};

function gallery(state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isLoading: true,
        useDefaulting: true,
      };
    case GET_PICTURE:
      return {
        ...state,
        isLoading: false,
        imgURL: action.payload,
        useDefaulting: false,
      };
    default:
      return state;
  }
}

export default gallery;
