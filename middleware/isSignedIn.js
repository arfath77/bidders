module.exports = async (req, res, next) => {
	if (!req.session.userId) {
		return res
			.status(403)
			.send({ message: "Please login to post Requirements" });
	}
	next();
};
