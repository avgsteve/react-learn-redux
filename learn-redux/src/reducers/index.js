import counterReducer from './reducer_counter';
import loggedReducer from './reducer_isLogged';

import {
    combineReducers
} from 'redux';

//To combine all reducers into one
const reducers_all_combined = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
});

export default reducers_all_combined;
