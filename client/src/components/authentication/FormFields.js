import React from 'react';

const FormFields = ({input, fieldAttrs :{label, placeholder, type, iconClass}, meta: {touched, error}}) => {
    return(
        <div className="field">
            <label className="label">{label}</label>
            <div className="control has-icons-left">
                <input className="input" {...input} type={type} placeholder={placeholder}/>
                <span className="icon is-small is-left">
						<i className={`fas ${iconClass}`} />
				</span>
            </div>
            <div className="message is-danger" style={{marginBottom:'20px'}}>
                    {touched && error}
            </div>
        </div>
    )
}

export default FormFields;