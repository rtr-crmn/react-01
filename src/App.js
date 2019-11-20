import React from 'react';

import TestComponent from './TestComponent';

import logo from './logo.svg';
import './App.css';

function App() {
  const data = [ 1, 2, 3, 4 ];

  console.log('App::render')

  return (
    <div className="App">
      <header className="App-header">
        <TestComponent values={data} />
      </header>
    </div>
  );
}

export default App;
