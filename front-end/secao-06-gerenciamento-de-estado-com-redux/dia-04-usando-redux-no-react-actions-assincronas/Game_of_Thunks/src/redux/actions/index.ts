import { CharacterType, Dispatch } from '../../types';

export const REQUEST_API = 'REQUEST_API';
export const GET_INFOS = 'GET_INFOS';

export const requestAPI = () => ({ type: REQUEST_API });

export const getInfos = (character: CharacterType) => ({
  type: GET_INFOS,
  payload: character,
});

export function fetchAPI(NOME_DO_PERSONAGEM: string) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestAPI());
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${NOME_DO_PERSONAGEM}`);
      const data = await response.json();
      const [character] = data;
      dispatch(getInfos(character));
    } catch (error: any) {
      console.log(error);
    }
  };
}
