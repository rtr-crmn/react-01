import React from 'react';
import { connect } from 'react-redux';

import rateActions from '../store/actions/RateActions';

const { invoke } = rateActions;

function RateComponent(props) {
  const { data, invoke } = props;

  console.log('RateComponent::render', { data })

  return (
    <div className="App">
      <div>RateComponent</div>

      <div>data: {Object.keys(data).length}</div>
      <ul>
        {Object.keys(data).map((key, index) => (
          <li key={index}>{key}: {data[key]}</li>
        ))}
      </ul>

      <div>
        <button onClick={e => invoke()}>request</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state /*, ownProps*/) => ({ 
  data: state.rate.data 
});

const mapDispatchToProps = { invoke }

export default connect(mapStateToProps, mapDispatchToProps)(RateComponent);
