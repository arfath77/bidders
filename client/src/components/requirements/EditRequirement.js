import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import ContentLoader from 'react-content-loader';

import {fetchOne, editRequirement} from '../../actions';
import FormTemplate from '../form/FormTemplate';
import {requirementData, requirementBtn} from './requirementInput';


class EditRequirement extends React.Component {
    componentDidMount(){
        this.props.fetchOne(this.props.match.params.id);
    }
    renderContent = () => {        
        if (!this.props.mylist) {
            return (
                <section className="section">
                    <ContentLoader />
                </section>
            );
        }
        return (
            <FormTemplate form="EditRequirement" 
                initialValues={this.props.mylist}
                formData={requirementData} 
                formBtn={requirementBtn}
                onSubmit={(formValues) => this.props.editRequirement(formValues, this.props.history)}/>
        )
        
    }
    render(){
        return(
            <section className="section">
                <h1 className="title">Edit Requirements</h1>
                {this.renderContent()}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {mylist: state.mylist}
}

export default connect(mapStateToProps, {fetchOne, editRequirement})(withRouter(EditRequirement));