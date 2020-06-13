const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
// const {Path} = require('path-parser');
// const {URL} = require('url');

const existingUser = require('../middleware/existingUser');

const User = mongoose.model('users');

module.exports = app => {

    app.post('/auth/signup', existingUser, async (req, res) => {
        const {email, password} = req.body
        // let authority =  '';
        // const path = Path('/api/:type/signup');
        // const match = path.test(new URL(url).pathname),
        // if (match) {
        //     author = match.type;
        // }
        try {
            const hashedPassword = await bcrypt.hash(password, 8);
            const user = await new User({email, password: hashedPassword}).save();
        } catch (err) {
            return res.status(500).send('There was a problem registering the user.')
        }
        
        res.send('account created successfully please login');
    })

    app.post('/auth/signin', async(req, res) => {
        const {email, password} =  req.body;
        // const path = Path('/api/:type/signup');
        // const match = path.test(new URL(url).pathname),
        // if (match) {
        //     author = match.type;
        // }
        const existingUser = await User.findOne({email: email});
        if (!existingUser) {
            return res.status(404).send('Email Id not not available, please try with correct once');
        }

        const match = await bcrypt.compare(password, existingUser.password);

        if (!match){
            return res.status(401).send('Password did not match');
        }

        req.session.id = existingUser._id;
        res.send('successfully signedIn');
    })

    app.get('/auth/logout', (req, res) => {
        req.session = null;
        res.send('you are signed out');
    })

    app.get('/auth/current_user', (req, res) => {
        res.send(req.session.id);
    })
}


