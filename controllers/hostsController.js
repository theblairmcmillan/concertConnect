"use strict";

const HostsModel = require('../models/hosts');

module.exports.index = (req, res) => {
	HostsModel.index(req, res);
};

// CREATE HOST
module.exports.createHost = (req, res) => {
	HostsModel.createHost(req, res);
};

// GET SINGLE HOST
module.exports.getSingleHost = (req, res) => {
	HostsModel.getSingleHost(req, res);
};

// DELETE 
module.exports.destroy = (req, res) => {
	HostsModel.destroy(req, res);
};

// UPDATE SINGLE HOST
module.exports.updateSingleHost = (req, res) => {
	HostsModel.updateSingleHost(req, res);
};