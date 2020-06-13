import React from 'react';

//placeholder, type, iconClass, type={type} placeholder={placeholder}
const FormFields = ({input, label,  meta: {touched, error}}) => {
    return(
        <div className="field">
            <label className="label">{label}</label>
            <div className="control has-icons-left ">
                <input className="input" {...input}/>
                {/* <span className="icon is-small is-left">
						<i className={`fas ${iconClass}`} />
				</span> */}
            </div>
            <div className="message is-danger" style={{marginBottom:'20px'}}>
                    {touched && error}
            </div>
        </div>
    )
}

export default FormFields;