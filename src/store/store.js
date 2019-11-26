import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import counterSaga from '../sagas/CounterSaga';
import rateSaga from '../sagas/RateSaga';

import counterReducer from './reducers/CounterReducer';
import rateReducer from './reducers/RateReducer';

import reduxLogger from 'redux-logger';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({
    counter: counterReducer,
    rate: rateReducer
}), applyMiddleware(...[ sagaMiddleware, reduxLogger ]));

// then run the saga
sagaMiddleware.run(counterSaga)
sagaMiddleware.run(rateSaga)

export default store;
