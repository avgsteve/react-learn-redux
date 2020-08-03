import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'; //provides data to all children elements

//step #1: import store and reducers
import {
  createStore,
} from 'redux';

import reducers_all_combined from './reducers/reducer_allCombined';
// ***if the all reducers file name is: "index.js", use just below:
// import reducers_all_combined from './reducers';


// 
const dataStore = createStore(
  reducers_all_combined, //the reducer obj imported from reducer_allCombined.js

  //second argument for using Redux devtools in Chrome
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// With <Provide> and its prop "store", the child element ;like <App /> can access the global data from the store "dataStore"
ReactDOM.render(
  <Provider store={dataStore}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
