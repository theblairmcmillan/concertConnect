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

module.exports = router;
