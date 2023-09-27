import { Dispatch } from '../../types';

export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getInfos = (image: string) => ({
  type: GET_PICTURE,
  payload: image,
});

const BASE_API = 'https://anapioficeandfire.com/api/characters?name=Tyrion%20Lannister';

export function fetchAPI() {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestAPI());
      const response = await fetch(BASE_API);
      const data = await response.json();
      const [character] = data;
      dispatch(getInfos(character));
    } catch (error: any) {
      console.log(error);
    }
  };
}
