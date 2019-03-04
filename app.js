const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//Connect to mongodb database
mongoose.connect(config.database);

mongoose.connection.on('connected',() => {
    console.log('Connected to database'+config.database);
});

mongoose.connection.on('err',(err) => {
    console.log('Database error'+err);
});

const app = express();
const users = require('./routes/users');
const port = 3000;

//CORS middle ware
app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname,'public')));

//Passport middleware

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


//body parser middle-ware
app.use(bodyParser.json());
app.use('/users',users);

//Index Route
app.get('/',(req,res) => {
    res.send('invalid end point');
});


//Start Server
app.listen(port, () => {
    console.log('server started at '+port);
});