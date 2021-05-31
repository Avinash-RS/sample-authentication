const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/login-auth'
mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true}, (err, res)=> {
    if (err) {
        return console.log('Unable to connect db');
     }
     return console.log('connected to db');
});