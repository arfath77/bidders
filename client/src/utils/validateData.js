const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

export const isInputBlank = (formData, error, values) => {
        formData.forEach(({name, type}) => {
        if (!values[name]){
            error[name] = `${name} cannot be blank`;
        }
        if (type==="email" && !validateEmail(values[name])){
            error[name] = `Invalid Email`;
        }
        if (name==="confirm password" && values.password !== values[name]){
            error[name] = "password and confirm password do not match"
        }
    })

    return error;
};

export const validateEmail = (email) => {
    return re.test(String(email).toLowerCase());
}
