const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

export const isInputBlank = (formData, error, values) => {
	formData.forEach(data => {
		if (!values[data.name]) {
			error[data.name] = `${data.name} cannot be blank`;
		}
		if (data.type === "email" && !validateEmail(values[data.name])) {
			error[data.name] = `Invalid Email`;
		}
		if (
			data.name === "confirm password" &&
			values.password !== values[data.name]
		) {
			error[data.name] = "password and confirm password do not match";
		}
		if (data.optional) {
			error[data.name] = "";
		}
		if (data.type === "number" && typeof values[data.name] !== "number") {
			error[data.name] = `${data.name} can have numberic values only`;
		}
	});

	return error;
};

export const validateEmail = email => {
	return re.test(String(email).toLowerCase());
};
