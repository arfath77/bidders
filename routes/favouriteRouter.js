const mongoose = require('mongoose');

const isSignedIn = require('../middleware/isSignedIn');
const User = mongoose.model('users');

module.exports = (app) => {
    app.patch('/api/favourite/add/:requirementId', isSignedIn, async (req, res) => {
        console.log(req.params.requirementId);
        const user = await User.findOneAndUpdate({_id: req.session.userId},{$push: {_favourites: req.params.requirementId}})
                                .populate({path:'_favourite'});
        const {_id, email, name, authority, credits, _favourites} = user
        res.send({_id, email, name, authority, credits, _favourites});
    });

    app.delete('/api/favourite/delete/:requirementId', isSignedIn, async(req, res)=> {
        const user = await User.findOneAndUpdate({_id: req.session.userId},{$pull: {_favourites: req.params.requirementId}})
                                .populate({path:'_favourite'});
        const {_id, email, name, authority, credits, _favourites} = user;
        res.send({_id, email, name, authority, credits, _favourites});
    })
}