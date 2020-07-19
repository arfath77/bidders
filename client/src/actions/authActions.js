//Authentication actions start here
import axios from "axios";
import { toast } from "react-toastify";

import { SIGNIN, LOGOUT, FETCH_USER, SIGNUP } from "./types";

export const signup = (formValues, history) => async dispatch => {
	try {
		const res = await axios.post("/api/signup", formValues);
		dispatch({ type: SIGNUP, payload: res.data });
		history.push("/");
		toast.info("Account created successfully");
	} catch (err) {
		toast.error(err.response.data.message);
	}
};

export const signin = (formValues, history) => async dispatch => {
	try {
		const user = await axios.post("/api/signin", formValues);
		dispatch({ type: SIGNIN, payload: user.data });
		history.push("/");
		toast.info("logged In successful");
	} catch (error) {
		toast.error(error.response.data.message);
	}
};

export const logout = history => async dispatch => {
	await axios.get("/api/logout");
	dispatch({ type: LOGOUT, payload: false });
	history.push("/");
	toast.info("logged out successful");
};

export const fetchUser = () => async dispatch => {
	const user = await axios.get("/api/current_user");
	dispatch({ type: FETCH_USER, payload: user.data });
};
//Authentication actions end here
