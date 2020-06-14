const express =  require('express');
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');

require('./models/User');

const keys = require('./config/keys');


const app = express();

app.use(bodyParser.json());
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));

require('./routes/authRouters')(app);

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('/client/build'));

//     const path  = require('path');
//     app.use('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//     })
// }

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
//     const path = require('path');
//     app.get('*', (req, res) => res.sendFile(path.resolve('client', 'build', 'index.html')));
// }

mongoose.connect(keys.mongoURI, { useNewUrlParser: true,   useUnifiedTopology: true})

const PORT = process.env.PORT || 6000;
app.listen(PORT);