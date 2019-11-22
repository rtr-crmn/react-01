import { createActions, handleActions, combineActions } from 'redux-actions';

import CounterActions from '../actions/CounterActions';

const { reset, update } = CounterActions;

const defaultState = { counter: 0 };

const counterReducer = handleActions(new Map([
  [update, (state, { payload: { amount } }) => {
    return { ...state, counter: amount };
  }],
  [reset, (state, action) => defaultState]
]), defaultState);
 
export default counterReducer;