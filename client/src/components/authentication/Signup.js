import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as actions from "../../actions";
import FormTemplate from "../form/FormTemplate";
import { signupData, signupBtn } from "./authFieldsData";

class Signup extends React.Component {
	render() {
		return (
			<section className="section">
				<h1 className="title">Sign Up</h1>
				<FormTemplate
					form="signUp"
					formData={signupData}
					formBtn={signupBtn}
					onSubmit={formValues =>
						this.props.signup(formValues, this.props.history)
					}
				/>
			</section>
		);
	}
}

export default connect(null, actions)(withRouter(Signup));
