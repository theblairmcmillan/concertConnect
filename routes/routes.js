// DEPENDENCIES 
var express = require('express');
var router = express.Router();


//MODELS 
var artists = require('./artists.routes');


//ROUTES 
router.use(artists);



//RETURN ROUTER//
module.exports = router;

