import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { searchInputs, searchBtn } from "./SearchInput";
import FormTemplate from "../form/FormTemplate";

class SearchRequirement extends React.Component {
	render() {
		return (
			<div className="box">
				<label>Search</label>
				<FormTemplate
					form="search"
					formData={searchInputs}
					formBtn={searchBtn}
					onClear={this.props.onClear}
					onSubmit={async formValues => {
						// await this.props.search(formValues);
						this.props.onSearch(formValues);
					}}
				/>
			</div>
		);
	}
}

export default connect(null, actions)(SearchRequirement);
