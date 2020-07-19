//these routes will only be for retailers

import React from "react";
import { Route } from "react-router-dom";

import CreateRequirement from "../components/requirements/CreateRequirement";
import MyRequirement from "../components/requirements/MyRequirement";
import EditRequirement from "../components/requirements/EditRequirement";

export default () => (
	<>
		<Route path="/requirement/create" component={CreateRequirement} />
		<Route path="/requirement/edit/:id" component={EditRequirement} />
		<Route path="/requirement/myAdds" component={MyRequirement} />
	</>
);
