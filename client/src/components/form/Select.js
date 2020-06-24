import React, { Fragment } from 'react';

const Select = ({name, iconClass, selectOptions, label}) => {
    renderSelect = ({ input, meta: { touched, error }, children }) => {
        <Fragment>
            <select {...input}>{children}</select>
            <div className="message is-danger">
                    {touched && error}
            </div>
        </Fragment>
    }
    return(
        <div className="field field-select">
        <div className="control has-icons-left">
            <div className="select is-fullwidth">
                <Field name={name} component={renderSelect}>
                    <option disabled value="defaultSelect">
                        {label}
                    </option>
                    {selectOptions.map((option, i) => (
                        <option key={i} value={option}>
                            {option}
                        </option>
                    ))}
                </Field>
            </div>
            <span className="icon is-left">
                <i className={`fas ${iconClass}`} />
            </span>
        </div>
    </div>
    )
}

export default Select;