import React from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

function ValueComponent(props) {
  const { data, name, counter } = props;

  console.log('ValueComponent::render', { data, name, counter })

  return (
    <div className="App">
        {data}: {name}, {counter}
    </div>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return { counter: state }
}

//const mapDispatchToProps = { increment, decrement, reset }

export default connect(mapStateToProps/*, mapDispatchToProps*/)(ValueComponent);
