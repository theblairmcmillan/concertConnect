'use strict';
// DEPENDENCIES 
var express = require('express');
var router = express.Router();

var controller = require('../controllers/hostsController');

router.get('/hosts', controller.index);
router.post('/hosts/:name/:hometown/:age/:genre/:partyOf/:website/:about/:tel', controller.createHost);
router.get('/hosts/:id', controller.getSingleHost);
router.delete('/hosts/:id', controller.destroy);
router.post('/hosts/:id', controller.update);

module.exports = router;