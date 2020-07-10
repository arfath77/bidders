const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = async(id) => {
    const user = await User.findById(id)
                            .populate({path:'_favourite'});
    return user;
}