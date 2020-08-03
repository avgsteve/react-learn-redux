
// use DOM element's onClick to execute "dispatch hook" with 'action' callback function with argument as "payload". Payload is extra value to modify orginal value in state
const reducer_counter = (state = 0, action) => {

    switch (action.type) {

        case 'INCREMENT':
            return state + action.payload;

        case 'DECREMENT':
            return state - action.payload;

        default:
            return state;
    }

};

export default reducer_counter;
// will be used to create combined reducer for index .js to create store data

