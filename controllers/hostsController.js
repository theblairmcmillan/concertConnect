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

// LOGIN 
module.exports.login = (req, res) => {
	HostsModel.login(req, res);
}

// SIGNUP
module.exports.signup = (req, res) => {
	HostsModel.signup(req, res);
};

