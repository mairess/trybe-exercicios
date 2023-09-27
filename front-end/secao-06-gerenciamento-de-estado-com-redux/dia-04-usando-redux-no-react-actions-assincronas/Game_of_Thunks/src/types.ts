import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type CharacterType = {
  name: string,
  gender: string,
  culture: string,
  born: string,
  died: string,
  titles: string[],
  isLoading: false,
};

export type ReduxState = {
  name: string,
  gender: string,
  culture: string,
  born: string,
  died: string,
  titles: string[],
  isLoading: false,
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;
