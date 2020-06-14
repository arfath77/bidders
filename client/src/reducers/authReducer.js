import {SIGNIN, LOGOUT, FETCH_USER, SIGNUP} from '../actions/types';

const authReducer = (state=null, action) => {
    switch (action.type) {
        case SIGNIN:
            return action.payload;
        case LOGOUT:
            return action.payload;
        case FETCH_USER:
            return action.payload;
        case SIGNUP:
            return action.payload;
        default:
            return state;
    }
}

export default authReducer;