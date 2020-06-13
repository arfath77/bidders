import React from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions';

import FormTemplate from './FormTemplate';

 const formData = [
    {label : 'Enter Email address', name:"email", placeholder:"name.name@example.com", iconClass: 'fa-envelope', type:"email"},
    {label : "Enter password", name: "password", placeholder: 'Password', type: 'password', iconClass: 'fa-lock'}
]

class Signin extends React.Component {
   
    render(){
        return (
            <form onSubmit={this.props.handleSubmit(()=> this.props.signin(this.props.formValues))}>
                <FormTemplate formData={formData}/>
            </form>
        )
    }
}

function validate (values) {
    const error={};
    // error.recipients = validateEmails(values.recipients || '');
    formData.forEach(({name}) => {
        if (!values[name]){
            error[name] = 'Please Enter a Value';
        }
    })
    return error;
}

export default connect(null, actions)(reduxForm({
    validate,
    form: 'signinForm'
})(Signin))