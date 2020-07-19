import {
	FETCH_MYLIST,
	DELETE_REQUIREMENT,
	UPDATE_REQUIREMENT,
	FETCH_SINGLE_REQUIREMENT,
} from "../actions/types";

const mylistReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_MYLIST:
			return action.payload;
		case DELETE_REQUIREMENT:
			return action.payload;
		case UPDATE_REQUIREMENT:
			return action.payload;
		case FETCH_SINGLE_REQUIREMENT:
			return action.payload;
		default:
			return state;
	}
};

export default mylistReducer;
