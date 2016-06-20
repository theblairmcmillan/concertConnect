'use strict';
// DEPENDENCIES 
var express = require('express');
var router = express.Router();
var passport = require('passport');

var controller = require('../controllers/hostsController');

router.get('/api/hosts', controller.index);
router.post('/api/hosts/:name/:location/:venue/:genre/:website/:accomodations/:about/:tel', controller.createHost);
router.get('/api/hosts/:id', controller.getSingleHost);
router.delete('/api/hosts/:id', controller.destroy);
router.post('/api/hosts/:id', controller.updateSingleHost);

//PROCESS THE SIGNUP FORM 

router.post('/api/signup/hosts', passport.authenticate('local-signup', {
	successRedirect : '/#/hosts', 
	failureRedirect : '/#/login',
	failureFlash : true
}));

router.post('/api/login/hosts', function(req, res, next) {
	console.log("host>>", req.params);
	passport.authenticate('local-login', function(err, host, info) {
		if (err) {
		  return next(err); // will generate a 500 error
		}
		console.log(">>>>!!!!>>>>!", host, info);
		// Generate a JSON response reflecting authentication status
		if (!host) {
		  return res.send({ success : false, message : 'authentication failed' });
		}
		// ***********************************************************************
		// "Note that when using a custom callback, it becomes the application's
		// responsibility to establish a session (by calling req.login()) and send
		// a response."
		// Source: http://passportjs.org/docs
		// ***********************************************************************
		req.login(host, loginErr => {
		  if (loginErr) {
		    return next(loginErr);
		  }
		  return res.send({ success : true, message : 'authentication succeeded' });
		});      
	})(req, res, next);
});


module.exports = router;