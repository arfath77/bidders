import React from "react";
import { Field } from "redux-form";

const Select = ({ fieldAttrs: { label, name, iconClass, selectOptions } }) => {
	const renderSelect = ({ input, meta: { touched, error }, children }) => {
		return (
			<>
				<select {...input}>{children}</select>
				<div className="message is-danger">{touched && error}</div>
			</>
		);
	};
	return (
		<div
			className={
				name === "searchCategory"
					? "field field-select control search search-width"
					: "field field-select"
			}
		>
			<div className="control has-icons-left">
				<div className="select is-fullwidth">
					<Field name={name} component={renderSelect}>
						<option value="defaultSelect">{label}</option>
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
	);
};

export default Select;
