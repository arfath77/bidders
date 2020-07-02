const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
// const {Path} = require('path-parser');
// const {URL} = require('url');

const existingUser = require('../middleware/existingUser');
const fetchUser = require('../helper/fetchUser');

const User = mongoose.model('users');

module.exports = app => {

    app.post('/api/signup', existingUser, async (req, res) => {
        const {email, password, name, company, authority} = req.body
        // let authority =  '';
        // const path = Path('/api/:type/signup');
        // const match = path.test(new URL(url).pathname),
        // if (match) {
        //     author = match.type;
        // }
        let user={};
        try {
            const hashedPassword = await bcrypt.hash(password, 8);
            user = await new User({email, password: hashedPassword, name, company, authority, dateRegistered: new Date()}).save();
        } catch (err) {
            return res.status(500).send('There was a problem while registering the user.')
        }        
        req.session.userId = user._id;
        res.send({_id: user._id, email, authority});
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
            return res.status(404).send('Email already registered');
        }

        const match = await bcrypt.compare(password, existingUser.password);

        if (!match){
            return res.status(401).send('Password Incorrect');
        }
        const {_id, authority} = existingUser;
        req.session.userId = _id;
        res.send({_id, email, authority});
    })

    app.get('/api/logout', (req, res) => {
        req.session = null;
        res.send('Logout successful');
    })

    app.get('/api/current_user', async (req, res) => {
        if (req.session.userId){
            const {_id, email, authority} = await fetchUser(req.session.userId);
            return res.send({_id, email, authority})
        }
        res.send(false);
    })
}


