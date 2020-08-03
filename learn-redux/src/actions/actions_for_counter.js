
//use DOM element's onClick to execute "dispatch hook" with 'action' callback function with argument as "payload"
export const action_counterDecrement = (multiplied_by) => {
    return {
        type: 'DECREMENT',
        payload: multiplied_by,
    };
};

export const action_counterIncrement = (multiplied_by) => {
    return {
        type: 'INCREMENT',
        payload: multiplied_by
    };
};

export const action_setLoginState = () => {
    return {
        type: 'SET_LOGIN_STATE',
    };
};
