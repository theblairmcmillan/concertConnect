"use strict";

const UsersModel = require('../models/users');

module.exports.index = (req, res) => {
	UsersModel.index(req, res);
};

//CREATE User
module.exports.createUser = (req, res) => {
	UsersModel.createUser(req, res);
};

// GET SINGLE User
module.exports.getSingleUser = (req, res) => {
	UsersModel.getSingleUser(req, res);
};

// DELETE 
module.exports.destroy = (req, res) => {
	UsersModel.destroy(req, res);
};

// UPDATE SINGLE User
module.exports.updateSingleUser = (req, res) => {
	UsersModel.updateSingleUser(req, res);
};

//LOGIN 
module.exports.login = (req, res) => {
	UsersModel.login(req, res);
}

// Signup 
module.exports.signup = (req, res) => {
	UsersModel.signup(req, res);
};