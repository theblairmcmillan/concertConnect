'use strict';
// DEPENDENCIES 
var express = require('express');
var router = express.Router();


//MODELS 
var artists = require('./artists.routes');
var hosts = require('./hosts.routes');


//ROUTES 
router.use(artists);
router.use(hosts);



//RETURN ROUTER//
module.exports = router;

