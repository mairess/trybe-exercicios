import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type ReduxState = {
  usedefaultImg: boolean,
  imgURL: string,
  isLoading: boolean,
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;
