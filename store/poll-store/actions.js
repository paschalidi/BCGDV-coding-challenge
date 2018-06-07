import { actionTypes as t } from './actionTypes';


export const saveFetch = (questions) => ({
  type: t.SAVE_FETCH,
  payload: { questions }
});

export const saveQuestionState = (question) => ({
  type: t.SAVE_QUESTION_STATE,
  payload: { question }
});

export const incrementChoices = () => ({
  type: t.INCREMENT_CHOICES
});

export const decrementChoices = () => ({
  type: t.DECREMENT_CHOICES
});

export const setChoice = (key, value) => ({
  type: t.SET_CHOICE,
  payload: { key, value }
});

export const setNewQuestionTitle = (value) => ({
  type: t.SET_NEW_QUESTION_TITLE,
  payload: { value }
});
export const makeNewQuestionBody = () => ({
  type: t.MAKE_QUESTION
});