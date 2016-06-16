'use strict';
// DEPENDENCIES 
var mongoose = require('mongoose');


// SCHEMA 
var Hosts = mongoose.model.('hosts', mongoose.Schema({
	name: String,
	location: String,
	vanue: String,
	genre: String,
	website: String,
	accomodations: String,
	about: String,
	tel: Number
}));


//RETURN MODEL 
module.exports.model = Hosts;

module.exports.index = (req, res) => {
	Hosts.find({}, (err, hosts) => {
		if (err) throw err;
		res.send(hosts)
	})
};

module.exports.createHost = (req, res) => {
	console.log(req.params)
	Hosts.create(req.params, (err) => {
		if (err) throw err;
		res.send('Created new host!')
	})
};

module.exports.getSingleHost = (req, res) => {
	console.log(req.params.id)
	Hosts.find({id: req.params.id }, (err, host) => {
		if (err) throw err;
		res.send(host);
	})
};

module.exports.destroy = (req, res) => {
	console.log(req.params)
	Hosts.find({id: req.params.id }, (err, host) => {
		if (err) throw err;
		host.remove(function(err){
			if (err) throw err;
			console.log("user deleted!");
		})
	})
};

module.exports.destroy = (req, res) => {
	console.log(req.params)
	Hosts.find({id: req.params.id }, (err, host) => {
		if (err) throw err;
		host.remove(function(err){
			if (err) throw err;
			console.log("user deleted!");
		})
	})
};












