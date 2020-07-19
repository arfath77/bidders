import axios from "axios";
import { toast } from "react-toastify";

import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "./types";

//favourite actions start here
export const addFavourite = id => async dispatch => {
	try {
		const res = await axios.patch(`/api/favourite/add/${id}`);
		dispatch({ type: ADD_FAVOURITE, payload: res.data });
		toast.info("Favourite added successfully");
	} catch (error) {
		toast.error(error.response.data.message);
	}
};

export const removeFavourite = id => async dispatch => {
	try {
		const res = await axios.delete(`/api/favourite/delete/${id}`);
		dispatch({ type: REMOVE_FAVOURITE, payload: res.data });
		toast.info("Favourite removed successfully");
	} catch (error) {
		toast.error(error.response.data.message);
	}
};
//favourite actions end here
