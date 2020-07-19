import axios from "axios";
import { toast } from "react-toastify";

import { ADD_CREDITS } from "./types";

//Add credits start here
export const addCredits = paymentId => async dispatch => {
	try {
		const res = await axios.post("/api/addCredits", { paymentId });
		dispatch({ type: ADD_CREDITS, payload: res.data });
		toast.info("Credits added successfully");
	} catch (error) {
		toast.error(error.response.data.message);
	}
};
//Add credits end here
