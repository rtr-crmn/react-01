import { handleActions } from 'redux-actions';

import RateActions from '../actions/RateActions';

const { success, error } = RateActions;

export const defaultState  = { 
  data: {},
  error: null
};

const rateReducer = handleActions(new Map([
  [success, (state, { payload: { data } }) => {
    return { ...state, data };
  }],
  [error, (state, { payload: { data } }) => {
    return { ...state, error };
  }]
]), defaultState);
 
export default rateReducer;