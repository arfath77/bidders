import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as actions from "../../actions";
import FormTemplate from "../form/FormTemplate";
import { requirementData, requirementBtn } from "./requirementInput";

class CreateRequirement extends React.Component {
	render() {
		return (
			<section className="section">
				<h1 className="title">Add Requirements</h1>
				<FormTemplate
					form="CreateRequirement"
					initialValues={{ category: "defaultSelect" }}
					formData={requirementData}
					formBtn={requirementBtn}
					onSubmit={formValues =>
						this.props.addRequirement(formValues, this.props.history)
					}
				/>
			</section>
		);
	}
}

export default connect(null, actions)(withRouter(CreateRequirement));
