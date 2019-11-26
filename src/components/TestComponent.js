import React from 'react';

import ValueComponent from './ValueComponent';
import RateComponent from './RateComponent';

function TestComponent(props) {
  const { values } = props;

  console.log('TestComponent::render', props)

  return (
    <div className="App">
        <RateComponent />

        {values.map((value, index) => <ValueComponent key={index} data={value} name={value} />)}
    </div>
  );
}

export default TestComponent;
