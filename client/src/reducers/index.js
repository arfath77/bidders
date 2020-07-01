import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import authReducer from './authReducer';
import requirementReducer from './requirementReducer';
import mylistReducer from './mylistReducer';

export default combineReducers({
    auth : authReducer,
    form : formReducer,
    list : requirementReducer,
    mylist : mylistReducer
})