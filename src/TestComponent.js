import React from 'react';

import ValueComponent from './ValueComponent';

function TestComponent(props) {
  const { values } = props;

  console.log('TestComponent::render', props)

  return (
    <div className="App">
        {values.map((value, index) => <ValueComponent key={index} data={value} name={value} />)}
    </div>
  );
}

export default TestComponent;
