'use strict';
// DEPENDENCIES 
var express = require('express');
var router = express.Router();
var passport = require('passport');

var controller = require('../controllers/artistsController');

router.get('/api/artists', controller.index);
router.post('/api/artists', controller.createArtist);
router.get('/api/artists/:id', controller.getSingleArtist);
router.delete('/api/artists/:id', controller.destroy);
router.put('/api/artists/:id', controller.updateSingleArtist);

module.exports = router;
