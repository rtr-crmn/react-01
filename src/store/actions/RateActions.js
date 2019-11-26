import { createActions } from 'redux-actions';

const { invoke, success, error } = createActions({
  INVOKE: undefined,
  SUCCESS: (data) => ({ data }),
  ERROR: (error) => ({ error })
});

export default { invoke, success, error };