import React from 'react';

const Textarea = ({input, fieldAttrs :{label, placeholder}, meta: {touched, error}}) => {
    return(
        <div className="field">
            <label className="label">{label}</label>
            <div className="control">
                <textarea className="textarea" {...input} placeholder={placeholder}/>
            </div>
            <div className="message is-danger">
                    {touched && error}
            </div>
        </div>
    )
}

export default Textarea;