'use strict';
// DEPENDENCIES 
var express = require('express');
var router = express.Router();
var passport = require('passport');


//MODELS 
var artists = require('./artists.routes');
var hosts = require('./hosts.routes');


// // INDEX 
// router.get('/', function(req, res) {
// 	res.render('index'); 
// });


// // LOGIN 
// router.get('/api/login', function(req, res) {
//     res.render('login', { message: req.flash('loginMessage') }); 
// });

// // SIGNUP 
// router.get('/api/signup', function(req, res) {
//     res.render('signup.ejs', { message: req.flash('signupMessage') });
// });


// LOGOUT 
router.get('/api/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});


//ROUTES 
router.use(artists);
router.use(hosts);

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
	// if user is authenticated in the session, carry on 
	if (req.isAuthenticated())
		return next();
	// if they aren't redirect them to the home page
	res.redirect('/');
}


//RETURN ROUTER//
module.exports = router;

