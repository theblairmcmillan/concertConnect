'use strict';
// DEPENDENCIES 
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');


// SCHEMA 
var hostSchema = mongoose.Schema({
	name: String,
	location: String,
	venue: String,
	genre: String,
	website: String,
	accomodations: String,
	about: String,
	tel: Number,
	local: {
		email: String,
		password: String
	}
});

// GENERATING A HASH 
hostSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// CHECKING IF PASSWORD IS VALID 
hostSchema.methods.validPassword = function(password) {
	console.log("is valid host???", password);
	console.log("local host pass", this.local.password);
	return bcrypt.compareSync(password, this.local.password);
};

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
	console.log(req.params)
	Hosts.create(req.params, (err) => {
		if (err) throw err;
		res.send('Created new host!')
	})
};

// GET SINGLE HOST 
module.exports.getSingleHost = (req, res) => {
	console.log(req.params.id)
	Hosts.find({id: req.params.id }, (err, host) => {
		if (err) throw err;
		res.send(host);
	})
};

// DELETE HOST BY ID
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


// GET SINGLE HOST BY ID AND UPDATE
module.exports.updateSingleHost = (req, res) => {
	console.log(req.params)
	Hosts.findByIdAndUpdate(req.params.id, req.params, (err, host) => {
		if (err) throw err;
		res.send('Found by Id and Updated!')
	})
};












