import { actionTypes as t } from './actionTypes';


export const saveFetch = (questions) => ({
  type: t.SAVE_FETCH,
  payload: { questions }
});