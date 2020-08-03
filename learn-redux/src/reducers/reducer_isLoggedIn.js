
// will be used to create combined reducer for index .js to create store data
const reducer_isLoggedIn = (state = false, action) => {
    switch (action.type) {
        case 'SET_LOGIN_STATE':
            return !state;
        default:
            return state;
    }

};

export default reducer_isLoggedIn;
