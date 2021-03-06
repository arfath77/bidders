const mongoose = require("mongoose");

const isSignedIn = require("../middleware/isSignedIn");

const Requirement = mongoose.model("requirement");

module.exports = app => {
	app.post("/api/requirement/create", isSignedIn, async (req, res) => {
		const requirement = await new Requirement({
			...req.body,
			_user: req.session.userId,
			datePosted: new Date(),
		}).save();
		res.send([requirement]);
	});

	app.get("/api/requirement/list", async (req, res) => {
		const list = await Requirement.find({}).sort({ datePosted: -1 }).exec();
		res.send(list);
	});

	app.get("/api/requirement/mylist", isSignedIn, async (req, res) => {
		const myList = await Requirement.find({ _user: req.session.userId })
			.sort({ datePosted: -1 })
			.exec();
		res.send(myList);
	});

	app.delete(
		"/api/requirement/delete/:requirementId",
		isSignedIn,
		async (req, res) => {
			const deleted = await Requirement.findOneAndDelete({
				_user: req.session.userId,
				_id: req.params.requirementId,
			});
			res.send(deleted._id);
		}
	);

	app.get("/api/requirement/single/:requirementId", async (req, res) => {
		const requirement = await (
			await Requirement.findById(req.params.requirementId)
		)
			.populate({ path: "_user", select: "name company dateRegistered" })
			.execPopulate();
		res.send([requirement]);
	});

	app.patch("/api/requirement/edit/", isSignedIn, async (req, res) => {
		const requirement = await Requirement.findOneAndUpdate(
			{ _user: req.session.userId, _id: req.body._id },
			{ ...req.body }
		);
		res.send([requirement]);
	});

	app.post("/api/requirement/search", async (req, res) => {
		const { search, searchCategory } = req.body;
		console.log(searchCategory);
		if (search) {
			const requirement = await Requirement.find({
				$text: {
					$search: search,
				},
				category: searchCategory ? searchCategory : { $exists: true },
				// status: "active",
			}).sort({ datePosted: -1 });
			return res.send(requirement);
		}
		const requirement = await Requirement.find({
			category: searchCategory ? searchCategory : { $exists: true },
			// status: "active",
		}).sort({ datePosted: -1 });
		return res.send(requirement);
	});
};
