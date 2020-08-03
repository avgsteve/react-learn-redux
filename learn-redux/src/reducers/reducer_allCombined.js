import reducer_counter from './reducer_counter';
import reducer_isLoggedIn from './reducer_isLoggedIn';

import {
    combineReducers
} from 'redux';


// ==== To combine all reducers into one: ====

// Use objects of reducers as argument to pass into combineReducers() "method" from 'redux' package 
const reducers_all_combined = combineReducers({

    // the property "name" like "counter" & "isLoggedIn" is going to be shown and used in store and Redux devtool panel
    state_counter: reducer_counter,
    state_isLoggedIn: reducer_isLoggedIn
});
// *** Importan: Then the method will return obj as a reducer which contains ALL REDUCERS and will be imported by index.js to create "store"


export default reducers_all_combined;

// Note:
// The path for importing this file:
// import reducers_all_combined from './reducers/reducer_allCombined';

// The default way for imporing this:
// import reducers_all_combined from './reducers';