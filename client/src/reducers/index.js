import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./authReducer";
import requirementReducer from "./requirementReducer";
import mylistReducer from "./mylistReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
	auth: authReducer,
	form: formReducer,
	list: requirementReducer,
	mylist: mylistReducer,
	search: searchReducer,
});
