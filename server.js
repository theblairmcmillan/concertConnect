'use strict';
// DEPENDENCIES 
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = require('./routes/routes');

// MONGODB
mongoose.connect('mongodb://localhost:27017/concertConnect');

// EXPRESS
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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