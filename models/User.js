const mongoose = require('mongoose');

const {Schema} =  mongoose;

const userSchema = new Schema({
    email : String,
    password : String,
    authority : String
});

mongoose.model('users', userSchema);