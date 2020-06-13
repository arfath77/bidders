import {SIGNIN, LOGOUT} from '../actions/types';

const authReducer = (state=null, action) => {
    switch (action.type) {
        case SIGNIN:
            return action.payload;
        case LOGOUT:
            return action.payload;
        default:
            return state;
    }
}

export default authReducer;