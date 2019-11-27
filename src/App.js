import React from 'react';
import { Provider } from 'react-redux';

import store from './store/store';

import ValueContext from './components/ValueContext';
import TestComponent from './components/TestComponent';

//import logo from './logo.svg';
import './App.css';

function App() {
  const data = [ 1 ];

  console.log('App::render')

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <ValueContext.Provider value={10}>
            <TestComponent values={data} />
          </ValueContext.Provider>
        </header>
      </div>
    </Provider>
  );
}

export default App;
