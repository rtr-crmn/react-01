import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import CounterSaga from '../sagas/CounterSaga';

import counterReducer from './reducers/CounterReducer';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(counterReducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(CounterSaga)

export default store;
