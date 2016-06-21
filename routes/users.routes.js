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
router.post('/api/signup/users', passport.authenticate('local-signup', {
	successRedirect : '/#/artists', // redirect to the secure profile section
	failureRedirect : '/#/login', // redirect back to the signup page if there is an error
	failureFlash : true // allow flash messages
}));

router.post('/api/login/users', function(req, res, next) {
	passport.authenticate('local-login', function(err, user, info) {
		if (err) {
		  return next(err); // will generate a 500 error
		}
		// Generate a JSON response reflecting authentication status
		if (!user) {
		  return res.redirect("/#/login");
		}

		req.login(user, loginErr => {
		  if (loginErr) {
		    return next(loginErr);
		  }
		  return res.redirect("/#/artists");
		});      
	})(req, res, next);
});

module.exports = router;



