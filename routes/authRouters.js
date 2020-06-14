const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
// const {Path} = require('path-parser');
// const {URL} = require('url');

const existingUser = require('../middleware/existingUser');

const User = mongoose.model('users');

module.exports = app => {

    app.post('/api/signup', existingUser, async (req, res) => {
        const {email, password} = req.body
        // let authority =  '';
        // const path = Path('/api/:type/signup');
        // const match = path.test(new URL(url).pathname),
        // if (match) {
        //     author = match.type;
        // }
        let user={};
        try {
            const hashedPassword = await bcrypt.hash(password, 8);
            user = await new User({email, password: hashedPassword}).save();
        } catch (err) {
            return res.status(500).send('There was a problem registering the user.')
        }        
        req.session.userId = user._id;
        res.send(user);
    })

    app.post('/api/signin', async(req, res) => {
        const {email, password} =  req.body;
        // const path = Path('/api/:type/signup');
        // const match = path.test(new URL(url).pathname),
        // if (match) {
        //     author = match.type;
        // }
        const existingUser = await User.findOne({email});
        if (!existingUser) {
            return res.status(404).send('Email Id not not available, please try with correct once');
        }

        const match = await bcrypt.compare(password, existingUser.password);

        if (!match){
            return res.status(401).send('Password did not match');
        }

        req.session.userId = existingUser._id;
        console.log(req.session.userId, "signin");
        res.send(existingUser);
    })

    app.get('/api/logout', (req, res) => {
        req.session = null;
        res.send('you are signed out');
    })

    app.get('/api/current_user', async (req, res) => {
        console.log(req.session.userId, "current");
        if (req.session.userId){
            const user = await User.findById(req.session.userId);
            return res.send(user)
        }
        res.send(false);
    })
}


