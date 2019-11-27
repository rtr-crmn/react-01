import React from 'react';
import { connect } from 'react-redux';

import CounterActions from '../store/actions/CounterActions';

import ValueContext from './ValueContext';

const { increment, decrement, reset } = CounterActions;

function ValueComponent(props) {
  const { data, name, counter, increment, decrement, reset } = props;

  console.log('ValueComponent::render', { data, name, counter })

  return (
    <ValueContext.Consumer>
      {(value) => (
        <div className="App">
          <div>ValueComponent</div>

          <div>data: {data}</div>
          <div>name: {name}</div>
          <div>counter: {counter}</div>
          <div>value: {value}</div>

          <div>
            <button onClick={e => increment()}>add</button>
            <button onClick={e => decrement()}>remove</button>
            <button onClick={e => reset()}>reset</button>
          </div>
      </div>
      )}
    </ValueContext.Consumer>
  );
}

const mapStateToProps = (state /*, ownProps*/) => ({ 
  counter: state.counter.counter
});

const mapDispatchToProps = { increment, decrement, reset }

export default connect(mapStateToProps, mapDispatchToProps)(ValueComponent);
