'use strict';
// DEPENDENCIES 
var express = require('express');
var router = express.Router();
var passport = require('passport');

var controller = require('../controllers/artistsController');

router.get('/api/artists', controller.index);
router.post('/api/artists/:name/:hometown/:age/:genre/:group_size/:website/:about/:tel', controller.createArtist);
router.get('/api/artists/:id', controller.getSingleArtist);
router.delete('/api/artists/:id', controller.destroy);
router.post('/api/artists/:id', controller.updateSingleArtist);
// router.post('/api/artists/login', controller.login);


// process the signup form
router.post('/api/signup/artists', passport.authenticate('local-signup', {
	successRedirect : '/#/artists', // redirect to the secure profile section
	failureRedirect : '/#/login', // redirect back to the signup page if there is an error
	failureFlash : true // allow flash messages
}));

// // process the login form
// router.post('/api/login/artists', passport.authenticate('local-login', {
//     successRedirect : '/#/artists', // redirect to the secure profile section
//     failureRedirect : '/#/login', // redirect back to the signup page if there is an error
//     failureFlash : true // allow flash messages
// }));


router.post('/api/login/artists', function(req, res, next) {
	console.log("MMMMM", req.params);
	passport.authenticate('local-login', function(err, artist, info) {
		if (err) {
		  return next(err); // will generate a 500 error
		}
		console.log(">>>>!!!!>>>>!", artist, info);
		// Generate a JSON response reflecting authentication status
		if (!artist) {
		  return res.send({ success : false, message : 'authentication failed' });
		}
		// ***********************************************************************
		// "Note that when using a custom callback, it becomes the application's
		// responsibility to establish a session (by calling req.login()) and send
		// a response."
		// Source: http://passportjs.org/docs
		// ***********************************************************************
		req.login(artist, loginErr => {
		  if (loginErr) {
		    return next(loginErr);
		  }
		  return res.send({ success : true, message : 'authentication succeeded' });
		});      
	})(req, res, next);
});

module.exports = router;



