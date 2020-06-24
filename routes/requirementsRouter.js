const mongoose = require('mongoose');

const isSignedIn = require('../middleware/isSignedIn');


const Requirement = mongoose.model('requirement');


module.exports = app => {

    app.post('/api/requirement/create', isSignedIn, async(req,res)=> {
        let requirements = {}
        try {
            requirements = await new Requirement({...req.body, _user: req.session.userId, datePosted: new Date()}).save();
        } catch (err) {
            return res.status(500).send('There was a problem while posting requirements, please try again')
        }
        req.send(requirements);
    });

    app.get('/api/requirement/list', async(req, res) => {
        const list = await Requirement.find({}).sort({ datePosted: -1 });
        res.send(list);
    });

    app.post('/api/requirement/mylist', async(req, res) => {
        const myList = await Requirement.find({_user : req.session.userId}).sort({ datePosted: -1 });
        res.send(myList)
    })

    app.delete('/api/requirement/delete/:RequirementId', async(req,res)=>{
        const deleted = await Requirement.findOneAndDelete({_user: req.session.userId, _id: req.params.RequirementId});
        res.send(deleted._id);
    })
}