import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

import FormFields from './FormFields';
import {isInputBlank} from '../../utils/validateData';


class FormTemplate extends React.Component{
    renderFields = (formData) => {
        return formData.map((data)=>{
            return (
                <Field key={data.name} 
                        name={data.name}
                        component={FormFields}
                        fieldAttrs={data} 
                        />
        )})};

    render(){
        return (
            <div>
                <form className="column is-half px-0" onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
                    {this.renderFields(this.props.formData)}
                    <Link to="/" className="button is-link is-light" style={{marginRight:'5px'}}>Cancel</Link>
                    <button className="button is-link">Submit</button>
                </form>
            </div>
        )
    }
        
}

function validate (values, ownProps) {
    let error={};
    error = isInputBlank(ownProps.formData, error, values);
    return error;
}

export default (reduxForm({
    validate
})(FormTemplate))

