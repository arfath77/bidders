import axios from 'axios';
import {SIGNIN, LOGOUT, FETCH_USER, SIGNUP} from './types';

export const signup = (formValues, history) => async dispatch => {
    const res = await axios.post('/api/signup', formValues);
    dispatch({type:SIGNUP, payload:res.data});
    history.push('/');
}

export const signin = (formValues, history) => async(dispatch) => {
    const user = await axios.post('/api/signin', formValues);
    dispatch({type:SIGNIN, payload: user.data});
    history.push('/');
}

export const logout = () => async(dispatch) => {
    await axios.get('/api/logout');
    dispatch({type:LOGOUT, payload: false});
}

export const fetchUser = () => async(dispatch) => {
    const user = await axios.get('/api/current_user');
    dispatch({type:FETCH_USER, payload: user.data});
}