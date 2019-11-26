import { select, call, put, takeEvery } from 'redux-saga/effects';

import rateApiClient from '../adapters/RateApiClient';

import rateActions from '../store/actions/RateActions';

const { invoke, success, error } = rateActions;

function* request(action) {
  try {

    //const counter = yield select(state => state.counter);

    const data = yield call(() => rateApiClient());

    yield put(success(data));

  } catch (e) {
    yield put(error(e));
  }
}

function* rateSaga() {
  yield takeEvery(invoke, request);
}

export default rateSaga;
