import { reducer } from '../reducer';
import { actionTypes as t } from '../actionTypes';


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

describe('app reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });
  it('should handle t.SAVE_FETCH', () => {
    expect
    (reducer(INITIAL_STATE, { type: t.SAVE_FETCH, payload: { questions: {} } }))
    .toEqual({ ...INITIAL_STATE, qs: {} });
  });
  // it('SAVE_QUESTION_STATE', () => {
  // });
  it('should handle INCREMENT_CHOICES', () => {
    expect
    (reducer({ numberOfChoices: 10 }, { type: t.INCREMENT_CHOICES }))
    .toEqual({ numberOfChoices: 10 });
  });
  it('should handle INCREMENT_CHOICES', () => {
    expect
    (reducer({ numberOfChoices: 5 }, { type: t.INCREMENT_CHOICES }))
    .toEqual({ numberOfChoices: 6 });
  });
  it('should handle DECREMENT_CHOICES', () => {
    expect
    (reducer({ numberOfChoices: 2 }, { type: t.DECREMENT_CHOICES }))
    .toEqual({ numberOfChoices: 2 });
  });
  it('should handle DECREMENT_CHOICES', () => {
    expect
    (reducer({ numberOfChoices: 10 }, { type: t.DECREMENT_CHOICES }))
    .toEqual({ numberOfChoices: 9 });
  });
  it('should handle SET_CHOICE', () => {
    expect
    (reducer({ ...INITIAL_STATE, choices: {} }, { type: t.SET_CHOICE, payload: { key: 0, value: 'value0' } }))
    .toEqual({ ...INITIAL_STATE, choices: { 0: 'value0' } });
  });
  it('should handle SET_CHOICE', () => {
    expect
    (reducer({ ...INITIAL_STATE, choices: { 0: 'value0' } }, { type: t.SET_CHOICE, payload: { key: 0, value: 'value2' } }))
    .toEqual({ ...INITIAL_STATE, choices: { 0: 'value2' } });
  });
  it('should handle SET_CHOICE', () => {
    expect
    (reducer({ ...INITIAL_STATE, choices: { 0: 'value0', 1: ''} }, { type: t.SET_CHOICE, payload: { key: 1, value: 'value1' } }))
    .toEqual({ ...INITIAL_STATE, choices: { 0: 'value0', 1: 'value1' } });
  });
  it('should handle SET_NEW_QUESTION_TITLE', () => {
    expect
    (reducer({ ...INITIAL_STATE, newQuestionTitle:'' }, { type: t.SET_NEW_QUESTION_TITLE, payload: { value: 'title' } }))
    .toEqual({ ...INITIAL_STATE, newQuestionTitle:'title' });
  });
  it('should handle SET_NEW_QUESTION_TITLE', () => {
    expect
    (reducer({ ...INITIAL_STATE, newQuestionTitle:'title' }, { type: t.SET_NEW_QUESTION_TITLE, payload: { value: '' } }))
    .toEqual({ ...INITIAL_STATE, newQuestionTitle:'' });
  });
  it('should handle MAKE_QUESTION', () => {
    expect
    (reducer({ ...INITIAL_STATE, newQuestionTitle:'title', choices: {0:'c0',1:'c1'}, newQuestionBody:{} }, { type: t.MAKE_QUESTION }))
    .toEqual({ ...INITIAL_STATE, newQuestionTitle:'title', choices: {0:'c0',1:'c1'}, newQuestionBody:{question:'title', choices:['c0','c1']} });
  });
  it('should handle MAKE_QUESTION', () => {
    expect
    (reducer({ ...INITIAL_STATE, newQuestionTitle:'title2', choices: {0:'c0',1:'c1',2:'c2'}, newQuestionBody:{} }, { type: t.MAKE_QUESTION }))
    .toEqual({ ...INITIAL_STATE, newQuestionTitle:'title2', choices: {0:'c0',1:'c1',2:'c2'}, newQuestionBody:{question:'title2', choices:['c0','c1','c2']} });
  });
});
