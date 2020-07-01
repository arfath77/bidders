import axios from 'axios';

import {SIGNIN, 
    LOGOUT, 
    FETCH_USER, 
    SIGNUP, 
    ADD_REQUIREMENT, 
    FETCH_LIST, 
    FETCH_MYLIST, 
    DELETE_REQUIREMENT, 
    UPDATE_REQUIREMENT,
    FETCH_SINGLE_REQUIREMENT
} from './types';

import cloudinaryUploadImages from '../utils/cloudinaryUploadImages';

export const signup = (formValues, history) => async dispatch => {
    console.log(formValues)
    const res = await axios.post('/api/signup', formValues);
    dispatch({type:SIGNUP, payload:res.data});
    history.push('/');
}

export const signin = (formValues, history) => async(dispatch) => {
    const user = await axios.post('/api/signin', formValues);
    dispatch({type:SIGNIN, payload: user.data});
    history.push('/');
}

export const logout = (history) => async(dispatch) => {
    await axios.get('/api/logout');
    dispatch({type:LOGOUT, payload: false});
    history.push('/');
}

export const fetchUser = () => async(dispatch) => {
    const user = await axios.get('/api/current_user');
    dispatch({type:FETCH_USER, payload: user.data});
}

export const addRequirement = (formValues, history) => async (dispatch) => {
    const imagesURL = await cloudinaryUploadImages(formValues.images);
    const res = await axios.post('/api/requirement/create', {...formValues, images: imagesURL});
    dispatch({type:ADD_REQUIREMENT, payload: res.data});
    history.push('/requirement/myAdds');
}

export const editRequirement = (formValues, history) => async (dispatch) => {
    const imagesURL = await cloudinaryUploadImages(formValues.images);
    const res = await axios.patch('/api/requirement/edit', {...formValues, images: imagesURL});
    dispatch({type:UPDATE_REQUIREMENT, payload: res.data});
    history.push('/requirement/myAdds');
}

export const fetchList = () => async dispatch => {
    const res = await axios.get('/api/requirement/list');
    dispatch({type:FETCH_LIST, payload: res.data});
}

export const fetchMyList = () => async dispatch => {
    const res = await axios.get('/api/requirement/mylist');
    dispatch({type:FETCH_MYLIST, payload: res.data});
}

export const fetchOne = (id) => async (dispatch) => {
    const res = await axios.get(`/api/requirement/list/:${id}`);
    dispatch({type:FETCH_SINGLE_REQUIREMENT, payload: res.data});
}

export const deleteRequirement = (id, history) => async dispatch => {
    const res = await axios.delete(`/api/requirement/delete/${id}`);
    dispatch({type:DELETE_REQUIREMENT, payload: res.data});
    history.push('/requirement/myAdds');
}