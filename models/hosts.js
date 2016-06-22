'use strict';
// DEPENDENCIES 
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Users = require('./users').model;


// SCHEMA 
var hostSchema = mongoose.Schema({
	name: String,
	location: String,
	venue: String,
	genre: String,
	website: String,
	accomodations: String,
	about: String,
	tel: Number
});

var Hosts = mongoose.model('hosts', hostSchema);

//RETURN MODEL 
module.exports.model = Hosts;

module.exports.index = (req, res) => {
	Hosts.find({}, (err, hosts) => {
		if (err) throw err;
		res.send(hosts)
	})
};

// CREATE HOST 
module.exports.createHost = (req, res) => {
	console.log("host params", req.body);
	var newHost = new Hosts(req.body);
	newHost.save();

	Users.findByIdAndUpdate(req.body.user, {$set:{host:newHost}}, (err, data) => {
		if (err) throw err;
		res.send(newHost)
	})
};

// GET SINGLE HOST 
module.exports.getSingleHost = (req, res) => {
	console.log(req.params.id)
	Hosts.findById(req.params.id, (err, host) => {
		if (err) throw err;
		res.send(host);
	})
};

// DELETE HOST BY ID
module.exports.destroy = (req, res) => {
	console.log(req.params)
	Hosts.findById(req.params.id, (err, host) => {
		if (err) throw err;
		host.remove(function(err){
			if (err) throw err;
			console.log("user deleted!");
		})
	})
};


// GET SINGLE HOST BY ID AND UPDATE
module.exports.updateSingleHost = (req, res) => {
	console.log(req.params)
	Hosts.findByIdAndUpdate(req.params.id, req.params, (err, host) => {
		if (err) throw err;
		res.send('Found by Id and Updated!')
	})
};












