import React from 'react';
import { Provider } from 'react-redux';

import store from './store/store';

import TestComponent from './components/TestComponent';

import logo from './logo.svg';
import './App.css';

function App() {
  const data = [ 1 ];

  console.log('App::render')

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <TestComponent values={data} />
        </header>
      </div>
    </Provider>
  );
}

export default App;
