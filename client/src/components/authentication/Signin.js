import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../actions';
import FormTemplate from '../form/FormTemplate';
import {signinData, signinBtn} from './authFieldsData';
 

class Signin extends React.Component { 
    render(){
        return (
            <section className="section">
                <h1 className="title">Sign In</h1>
                <FormTemplate form="signIn" 
                    formData={signinData} 
                    formBtn={signinBtn}
                    onSubmit={(formValues) => this.props.signin(formValues, this.props.history)}/>
            </section>
        )
    }
}

export default connect(null, actions)(withRouter(Signin));