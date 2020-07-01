import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../actions';
import FormTemplate from '../form/FormTemplate';
import {requirementData, requirementBtn} from './requirementInput';


class EditRequirement extends React.Component {
    componentDidMount(){
        this.props.fetchOne(this.props.match.params.id);
    }
    render(){
        return(
            <section className="section">
                <h1 className="title">Edit Requirements</h1>
                <FormTemplate form="EditRequirement" 
                    initialValues={this.props.mylist}
                    formData={requirementData} 
                    formBtn={requirementBtn}
                    onSubmit={(formValues) => this.props.editRequirement(formValues, this.props.history)}/>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {mylist: state.mylist}
}

export default connect(mapStateToProps, actions)(withRouter(EditRequirement));