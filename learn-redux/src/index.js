import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//
import { createStore } from 'redux';

// https://www.youtube.com/watch?v=CVpUuw9XSjY&t=671s






// STORE -> GLOBALIZED STATE



// ACTION -> DESCRIPT WHAT YOU WANT TO DO. EX: Increment (use names)
// ---------: All actions are objects return functions

const increment = () => {
  return {
    type: 'INCREMENT' // <===== The name of "action". Will be "action.type" with value "INCREMENT" in REDUCER
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT' // <===== The name of "action"
  };
};



// REDUCER -> check the actions & update data state (in store) based on what the action is.

const reducer_Counter = (state = 0, action) => { // pass in two arguments: initial state (state = 0) & action

  switch (action.type) {

    case "INCREMENT": // When the action.type has value: "INCREMENT"
      return state + 1; // update the state by add 1

    case "DECREMENT": // When the action.type has value: "INCREMENT"
      return state - 1; // update the state by add 1
  }

};

// create a store
let store = createStore(reducer_Counter);


// (display it in console)
store.subscribe(
  //use .subcribe
  () => {
    console.log('\n\nUse store.getState() to get the current state inside the "store".\nCurrent state is:');
    console.log(store.getState());
  }
);



// DISPATCH -> Execute the "ACTION" by "dispatching" action to Reducer

store.dispatch(increment()); // dispatch the ACTION "increment" function to REDUCER
store.dispatch(decrement()); // dispatch the ACTION "increment" function to REDUCER



ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
