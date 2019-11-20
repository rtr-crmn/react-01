import { createActions, handleActions, combineActions } from 'redux-actions';

import CounterActions from './CounterActions';

const { increment, decrement } = CounterActions;

const defaultState = { counter: 10 };

const counterReducer = handleActions({
    [combineActions(increment, decrement)]: (state, { payload: { amount } }) => {
      return { ...state, counter: state.counter + amount };
    }
  }, defaultState);
 
export default counterReducer;