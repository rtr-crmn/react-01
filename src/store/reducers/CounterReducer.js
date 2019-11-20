import { createActions, handleActions, combineActions } from 'redux-actions';

import CounterActions from '../actions/CounterActions';

const { increment, decrement, reset } = CounterActions;

const defaultState = { counter: 10 };

const counterReducer = handleActions(new Map([
  [increment, (state, { payload: { amount } }) => {
    return { ...state, counter: state.counter + amount };
  }],
  [decrement, (state, { payload: { amount } }) => {
    return { ...state, counter: state.counter - amount };
  }],
  [reset, (state, action) => defaultState]
]), defaultState);
 
export default counterReducer;