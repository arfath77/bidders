const mongoose = require('mongoose');

const {Schema} =  mongoose;

const requirementSchema = new Schema({
    title : String,
    quantity : String,
    category : String,
    imageUrl : [{type:String}],
    description : String,
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
	datePosted: Date
});

mongoose.model('requirement', requirementSchema);