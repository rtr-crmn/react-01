import { createActions } from 'redux-actions';
 
const { increment, decrement, reset, update, error } = createActions({
  INCREMENT: (amount = 1) => ({ amount }),
  DECREMENT: (amount = 1) => ({ amount }),
  RESET: undefined,
  UPDATE: (amount) => ({ amount }),
  ERROR: (error) => ({ error })
});

export default { increment, decrement, reset, update, error };