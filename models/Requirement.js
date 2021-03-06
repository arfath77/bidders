const mongoose = require("mongoose");

const { Schema } = mongoose;

const requirementSchema = new Schema({
	title: String,
	quantity: String,
	category: String,
	images: [{ type: String }],
	description: String,
	_user: { type: Schema.Types.ObjectId, ref: "users" },
	datePosted: Date,
	status: String,
});
requirementSchema.index({ title: "text", description: "text" });
mongoose.model("requirement", requirementSchema);
