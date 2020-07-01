import {ADD_REQUIREMENT, FETCH_LIST} from '../actions/types';

const requirementReducer = (state=[], action) => {
    switch (action.type) {
        case ADD_REQUIREMENT:
            return action.payload;
        case FETCH_LIST:
            return action.payload;
        default:
            return state;
    }
}

export default requirementReducer;