const fetchUser = require("./fetchUser");

module.exports = async requirement => {
	const { name, company } = await fetchUser(requirement._user);
	const { _id, title, description, category, datePosted, images } = requirement;
	return [_id, title, description, category, datePosted, images, name, company];
};
