import { select, call, put, takeEvery } from 'redux-saga/effects';

import counterActions from '../store/actions/CounterActions';
import { defaultState as counterDefaultState } from '../store/reducers/CounterReducer';

const { increment, decrement, reset, update, error } = counterActions;

function* invoke({ payload }) {
  const { amount } = payload;
  
  try {

    const counter = yield select(state => state.counter);

    yield put(update(counter - amount));

  } catch (e) {
    yield put(error(e));
  }
}

function* resetCounter(action) {
  try {

    const { counter } = counterDefaultState;

    yield put(update(counter));

  } catch (e) {
    yield put(error(e));
  }
}

function* counterSaga() {
  yield takeEvery(increment, incrementCounter);
  yield takeEvery(decrement, decrementCounter);
  yield takeEvery(reset, resetCounter);
}

export default counterSaga;