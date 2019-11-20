import React from 'react';
import { connect } from 'react-redux';

import CounterActions from './CounterActions';

import logo from './logo.svg';
import './App.css';

const { increment, decrement } = CounterActions;

function ValueComponent(props) {
  const { data, name, counter, increment, decrement } = props;

  console.log('ValueComponent::render', { data, name, counter })

  return (
    <div className="App">
      <div>data: {data}</div>
      <div>name: {name}</div>
      <div>counter: {counter}</div>

      <div>
        <button onClick={e => increment()}>add</button>
        <button onClick={e => decrement()}>remove</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return { counter: state.counter }
}

const mapDispatchToProps = { increment, decrement /*, reset */ }

export default connect(mapStateToProps, mapDispatchToProps)(ValueComponent);
