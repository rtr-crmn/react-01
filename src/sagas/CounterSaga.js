import { select, call, put, takeEvery } from 'redux-saga/effects';

import counterActions from '../store/actions/CounterActions';

const { increment, decrement, reset, update, error } = counterActions;

function* incrementCounter({ payload }) {
  const { amount } = payload;
  
  try {

    const counter = yield select(state => state.counter);

    yield put(update(counter + amount));

  } catch (e) {
    yield put(error(e));
  }
}

function* decrementCounter({ payload }) {
  const { amount } = payload;
  
  try {

    const counter = yield select(state => state.counter);

    yield put(update(counter - amount));

  } catch (e) {
    yield put(error(e));
  }
}

function* counterSaga() {
  yield takeEvery(increment, incrementCounter);
  yield takeEvery(decrement, decrementCounter);
}

export default counterSaga;