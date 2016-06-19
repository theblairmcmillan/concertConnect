'use strict';
// DEPENDENCIES 
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');
var port = process.env.PORT || 3000;

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var configDB = require('./config/database.js');

// MONGODB
mongoose.connect(configDB.url);

require('./config/passport')(passport); // pass passport for configuration


// EXPRESS
var app = express();
var router = require('./routes/routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //set up ejs for templating 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
// app.use(bodyParser()); // get info from html forms

// REQUIRED FOR PASSPORT // 
app.use(session({ secret: 'ilovescotch'})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistant login sessions
app.use(flash()); // use connect-flash for flash messages stored in session 

//ROUTES
app.use(router);

// START SERVER 
const database = mongoose.connection;
database.on('open', (err) => {
    if (err) throw err;
    app.listen(3000, () => {
        console.log(`API running on port 3000`);
    });
});