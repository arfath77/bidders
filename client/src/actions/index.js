import axios from 'axios';
import {SIGNIN, LOGOUT, FETCH_USER, SIGNUP, ADD_REQUIREMENT, FETCH_LIST, FETCH_MYLIST} from './types';

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

export const addRequirement = (formValues, history) => async (dispatch) => {
    const res = await axios.post('/api/requirement/create', formValues);
    dispatch({type:ADD_REQUIREMENT, payload: res.data});
    history.push('/');
}

export const fetchList = () => async dispatch => {
    const res = await axios.get('/api/requirement/list');
    dispatch({type:FETCH_LIST, payload: res.data});
}

export const fetchMyList = (id) => async dispatch => {
    const res = await axios.post('/api/requirement/mylist', id);
    dispatch({type:FETCH_MYLIST, payload: res.data});
}

export const deleteRequirement = (id) => async dispatch => {
    const res = await axios.delete(`/api/requirement/delete/${id}`);
    dispatch({type:DELETE_REQUIREMENT, payload: res.data});
}