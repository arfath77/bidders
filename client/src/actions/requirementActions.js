import axios from "axios";
import { toast } from "react-toastify";

import cloudinaryUploadImages from "../utils/cloudinaryUploadImages";
import {
	ADD_REQUIREMENT,
	FETCH_LIST,
	FETCH_MYLIST,
	DELETE_REQUIREMENT,
	UPDATE_REQUIREMENT,
	FETCH_SINGLE_REQUIREMENT,
	SEARCH,
} from "./types";

//Requirement actions start here
export const addRequirement = (formValues, history) => async dispatch => {
	try {
		const imagesURL = await cloudinaryUploadImages(formValues.images);
		const res = await axios.post("/api/requirement/create", {
			...formValues,
			images: imagesURL,
		});
		dispatch({ type: ADD_REQUIREMENT, payload: res.data });
		history.push("/requirement/myAdds");
		toast.info("Requirement added successfully");
	} catch (error) {
		toast.error(error.response.data.message);
	}
};

export const editRequirement = (formValues, history) => async dispatch => {
	try {
		const imagesURL = await cloudinaryUploadImages(formValues.images);
		const res = await axios.patch("/api/requirement/edit", {
			...formValues,
			images: imagesURL,
		});
		dispatch({ type: UPDATE_REQUIREMENT, payload: res.data });
		history.push("/requirement/myAdds");
		toast.info("Requirement Edited successfully");
	} catch (error) {
		toast.error(error.response.data.message);
	}
};

export const fetchList = () => async dispatch => {
	try {
		const res = await axios.get("/api/requirement/list");
		dispatch({ type: FETCH_LIST, payload: res.data });
	} catch (error) {
		toast.error("error while fetching list");
	}
};

export const fetchMyList = () => async dispatch => {
	try {
		const res = await axios.get("/api/requirement/mylist");
		dispatch({ type: FETCH_MYLIST, payload: res.data });
	} catch (error) {
		toast.error(error.response.data.message);
	}
};

export const fetchOne = id => async dispatch => {
	try {
		const res = await axios.get(`/api/requirement/single/${id}`);
		dispatch({ type: FETCH_SINGLE_REQUIREMENT, payload: res.data });
	} catch (error) {
		toast.error(error.response.data.message);
	}
};

export const deleteRequirement = (id, history) => async dispatch => {
	try {
		const res = await axios.delete(`/api/requirement/delete/${id}`);
		dispatch({ type: DELETE_REQUIREMENT, payload: res.data });
		history.push("/requirement/myAdds");
		toast.info("Requirement deleted successfully");
	} catch (error) {
		toast.error(error.response.data.message);
	}
};

export const search = formValues => async dispatch => {
	try {
		const res = await axios.post("/api/requirement/search", formValues);
		dispatch({ type: SEARCH, payload: res.data });
	} catch (error) {
		console.log(error.response.data.message);
	}
};
//requirement actions end here
