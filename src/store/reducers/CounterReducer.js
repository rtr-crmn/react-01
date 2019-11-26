import { handleActions } from 'redux-actions';

import CounterActions from '../actions/CounterActions';

const { update } = CounterActions;

export const defaultState  = { counter: 0 };

const counterReducer = handleActions(new Map([
  [update, (state, { payload: { amount } }) => {
    return { ...state, counter: amount };
  }]
]), defaultState);
 
export default counterReducer;