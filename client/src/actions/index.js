import axios from 'axios';
import {SIGNIN, LOGOUT} from './types';

export const signup = async(formValues) => {
    try{
        await axios.post('/auth/signup', formValues);
    } catch(err) {
        throw new Error('Signup failed')
    }
}

export const signin = (formValues) => async(dispatch) => {
    try {
        const user = await axios.post('/auth/signin', formValues);
        dispatch({type:SIGNIN, payload: user.data});
    } catch (err) {
        throw new Error('Signin failed')
    }
}

export const logout = () => async(dispatch) => {
    await axios.get('/auth/logout');
    dispatch({type:LOGOUT, payload: false});
}

export const fetchUser = () => async(dispatch) => {
    const user = await axios.get('/auth/current_user');
    dispatch({type:SIGNIN, payload: user.data});
}