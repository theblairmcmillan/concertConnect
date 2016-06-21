'use strict';
// DEPENDENCIES 
var express = require('express');
var router = express.Router();
var passport = require('passport');

var controller = require('../controllers/usersController');

router.get('/api/users', controller.index);
router.post('/api/users', controller.createUser);
router.get('/api/users/:id', controller.getSingleUser);
router.delete('/api/users/:id', controller.destroy);
router.post('/api/users/:id', controller.updateSingleUser);

// process the signup form
router.post('/api/signup/users', function(req, res, next) {
	passport.authenticate('local-signup', function(err, user) {
		if (err) {
		  return next(err); // will generate a 500 error
		}
		console.log("---", user);
		// Generate a JSON response reflecting authentication status
		if (!user) {
		  return res.send({ success : false, message : 'Signup failed. Please try again.' });
		}

		req.login(user, loginErr => {
		  if (loginErr) {
		    return next(loginErr);
		  }
		  return res.send({ success : true, message : 'authentication succeeded', user: user });
		});      
	})(req, res, next);
});

router.post('/api/login/users', function(req, res, next) {
	passport.authenticate('local-login', function(err, user) {
		if (err) {
		  return next(err); // will generate a 500 error
		}
		// Generate a JSON response reflecting authentication status
		if (!user) {
		  return res.send({ success : false, message : 'Email or password is incorrect.' });
		}

		req.login(user, loginErr => {
		  if (loginErr) {
		    return next(loginErr);
		  }
		  return res.send({ success : true, message : 'authentication succeeded', user: user });
		});      
	})(req, res, next);
});

module.exports = router;



