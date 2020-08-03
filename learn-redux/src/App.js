import React from 'react';

import {
  useSelector,  //get value from property from store
  useDispatch  //set value with 'action' in property from store
} from 'react-redux';

import {
  action_counterDecrement,
  action_counterIncrement,
  action_setLoginState
} from './actions/actions_for_counter';

function App() {

  // use React Hooks: useSelector to get state from Redux and read the value from object like the one with property name: ".state_counter"

  // ref: https://react-redux.js.org/api/hooks#useselector

  const counter = useSelector(state => state.state_counter);  // the property name "state_counter" is made up inside the reducer (reducer_allCombined.js) used to create store in index.js


  // ===== GET value with useSelector hook from Redux store =====

  const isLoggedIn = useSelector(state => state.state_isLoggedIn);

  console.log('\nCurrent counter:', counter);

  const currentState = useSelector(state => state);
  console.log('\nData in current state:', currentState);


  // ===== Dispatch for Actions =====
  // use 
  const dispatch = useDispatch();
  // ref: https://react-redux.js.org/api/hooks#usedispatch


  const counterStyle = {
    // 'fontWeight': '600',
    'fontSize': '1.5rem',
  };

  const buttonStyle = {
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

          <button style={buttonStyle} onClick={
            () => dispatch(action_counterIncrement(2))
          }> + </button>

          <button style={buttonStyle} onClick={
            () => dispatch(action_counterDecrement(2))
          }> - </button>
        </span>

      </p>


      <p>Current login state:
       {
          `${isLoggedIn === true ? 'true' : 'false'}`
        }
        <span>
          <button style={buttonStyle} onClick={
            () => dispatch(action_setLoginState(!isLoggedIn))
          }> Swtich!
          </button>
        </span>
      </p>
    </div>
  );
};

export default App;
