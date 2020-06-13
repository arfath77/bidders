const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = async (req, res, next) => {
    const existingUser = await User.findOne({email: req.body.email});
    if (existingUser) {
        return res.status(403).send('Email Id already used try with another');
    }

    next();
}