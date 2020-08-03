import React from 'react';

import { useSelector } from 'react-redux';

function App() {

  // use React Hooks: useSelector to get state from Redux and read the value from object like the one with property name: ".state_counter"

  // ref: https://react-redux.js.org/api/hooks#useselector

  const counter = useSelector(state => state.state_counter);  // the property name "state_counter" is made up inside the reducer (reducer_allCombined.js) used to create store in index.js

  const isLoggedIn = useSelector(state => state.state_isLoggedIn);

  console.log('\nCurrent counter:', counter);

  const currentState = useSelector(state => state);
  console.log('\nData in current state:', currentState);

  const counterStyle = {
    // 'fontWeight': '600',
    'fontSize': '1.5rem',
  };

  const buttonStyle = {
    // 'fontWeight': '600',
    'fontSize': '1.5rem',
    'margin': '1rem',
  };

  return (
    <div className="App">
      <h2>Hello from Redux with React</h2>

      <p>
        The current counter is:
      <span style={counterStyle}> {counter} </span>

        <span>
          <button style={buttonStyle}> + </button>
          <button style={buttonStyle}> - </button>
        </span>

      </p>


      <p>Current login state: {
        `${isLoggedIn === true ? 'true' : 'false'}`
      }</p>
    </div>
  );
}

export default App;
