import { createActions } from 'redux-actions';
 
const { increment, decrement, reset } = createActions({
  INCREMENT: (amount = 1) => ({ amount }),
  DECREMENT: (amount = 1) => ({ amount }),
  RESET: undefined,
});

export default { increment, decrement, reset };