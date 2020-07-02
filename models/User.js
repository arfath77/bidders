const mongoose = require('mongoose');

const {Schema} =  mongoose;

const userSchema = new Schema({
    name : String,
    company : String,
    email : String,
    password : String,
    authority : String,
    dateRegistered : Date
});

mongoose.model('users', userSchema);