// DEPENDENCIES 
var express = require('express');
var router = express.Router();


//MODELS 
var Product = require('../models/product');





//ROUTES 
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');



//RETURN ROUTER//
module.exports = router;

