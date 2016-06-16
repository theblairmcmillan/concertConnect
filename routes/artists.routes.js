'use strict';
// DEPENDENCIES 
var express = require('express');
var router = express.Router();

var controller = require('../controllers/artistsController');

router.get('/artists', controller.index);
router.post('/artists/:name/:hometown/:age/:genre/:group_size/:website/:about/:tel', controller.createArtist);
router.get('/artists/:id', controller.getSingleArtist);
router.delete('/artists/:id', controller.destroy);
router.post('/artists/:id', controller.updateSingleArtist);

module.exports = router;