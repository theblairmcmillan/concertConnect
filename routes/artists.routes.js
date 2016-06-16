// DEPENDENCIES 
var express = require('express');
var router = express.Router();

var controller = require('../controllers/artistsController');

router.get('/artists', controller.index);
router.post('/artists/:name/:hometown/:age/:genre/:partyOf/:website/:about', controller.createArtist);

module.exports = router;