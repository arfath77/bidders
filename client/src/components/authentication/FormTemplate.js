import React from 'react';
import {Field} from 'redux-form';
import {Link} from 'react-router-dom';

import FormFields from './FormFields';

const FormTemplate = ({formData}) => {
    return (
        <div>
            {formData.map(({name, label})=>{return (<Field key={name} name={name} label={label} component={FormFields}/>)})}
            <Link to="/" className="button is-link is-light">Cancel</Link>
            <button className="button is-link">Submit</button>
        </div>
    )
}

export default FormTemplate;

