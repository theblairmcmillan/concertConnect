"use strict";

const HostsModel = require('../models/hosts');

module.exports.index = (req, res) => {
	HostsModel.index(req, res);
};

module.exports.createHost = (req, res) => {
	HostsModel.createHost(req, res);
};