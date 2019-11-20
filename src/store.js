import { createStore } from 'redux';

function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counterReducer);

//store.subscribe(() => console.log(store.getState()))

//setInterval(() => store.dispatch({ type: Math.random() > 0.5 ? 'INCREMENT' : 'DECREMENT' }), 1000)

export default store;