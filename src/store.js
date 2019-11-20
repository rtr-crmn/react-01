import { createStore } from 'redux';

import counterReducer from './CounterReducer';

const store = createStore(counterReducer);

//store.subscribe(() => console.log(store.getState()))

//setInterval(() => store.dispatch({ type: Math.random() > 0.5 ? 'INCREMENT' : 'DECREMENT' }), 1000)

export default store;