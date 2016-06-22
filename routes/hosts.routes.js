'use strict';
// DEPENDENCIES 
var express = require('express');
var router = express.Router();
var passport = require('passport');

var controller = require('../controllers/hostsController');

router.get('/api/hosts', controller.index);
router.post('/api/hosts', controller.createHost);
router.get('/api/hosts/:id', controller.getSingleHost);
router.delete('/api/hosts/:id', controller.destroy);
router.put('/api/hosts/:id', controller.updateSingleHost);

module.exports = router;