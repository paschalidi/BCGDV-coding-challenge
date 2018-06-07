import { actionTypes as t } from './actionTypes';
import * as R from 'ramda';


const INITIAL_STATE = {
  numberOfChoices: 2,
  newQuestionTitle: '',
  choices: {},
  newQuestionBody: {},
  q: {
    choices: [],
    published_at: '',
    url: '',
    question: '',
    totalVotes: 0
  }
};

// REDUCERS
export const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {

    case t.SAVE_FETCH:
      return R.assocPath(['qs'], payload.questions, state);

    case t.SAVE_QUESTION_STATE:
      let totalVotes = Object.keys(payload.question.choices).reduce((current, index) => {
        return current + parseInt(payload.question.choices[index].votes, 10);
      }, 0);
      return {
        ...state,
        q: R.assocPath(['totalVotes'], totalVotes, payload.question)
      };

    case t.INCREMENT_CHOICES:
      if (state.numberOfChoices < 10)
        return R.assocPath(['numberOfChoices'], state.numberOfChoices + 1, state);
      return { ...state };

    case t.DECREMENT_CHOICES:
      if (state.numberOfChoices > 2)
        return R.compose(
          R.assocPath(['numberOfChoices'], state.numberOfChoices - 1),
          R.dissocPath(['choices', (state.numberOfChoices - 1).toString()])
        )(state);
      return { ...state };

    case t.SET_CHOICE:
      return R.assocPath(['choices', [payload.key]], payload.value, state);

    case t.SET_NEW_QUESTION_TITLE:
      return R.assocPath(['newQuestionTitle'], payload.value, state);

    case t.MAKE_QUESTION:
      return {
        ...state, newQuestionBody: {
          question: state.newQuestionTitle,
          choices: Object.keys(state.choices).map(index => state.choices[index])
        }
      };

    default:
      return state;
  }
};