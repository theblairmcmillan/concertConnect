'use strict';
// DEPENDENCIES 
var express = require('express');
var router = express.Router();

var controller = require('../controllers/artistsController');

router.get('/api/artists', controller.index);
router.post('/api/artists/:name/:hometown/:age/:genre/:group_size/:website/:about/:tel', controller.createArtist);
router.get('/api/artists/:id', controller.getSingleArtist);
router.delete('/api/artists/:id', controller.destroy);
router.post('/api/artists/:id', controller.updateSingleArtist);
router.post('/api/artists/login', controller.login);


// process the signup form
router.post('/api/signup', passport.authenticate('local-signup', {
successRedirect : '/profile', // redirect to the secure profile section
failureRedirect : '/signup', // redirect back to the signup page if there is an error
failureFlash : true // allow flash messages
}));



module.exports = router;