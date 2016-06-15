
// DEPENDENCIES 
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MONGODB
mongoose.connect('mongodb://localhost/rest_test');

// EXPRESS
var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//ROUTES
app.use('/api', require('./routes/api'));

// START SERVER 
app.listen(3000);
console.log("api is running");