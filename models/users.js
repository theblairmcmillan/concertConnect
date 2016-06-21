"use strict";
// DEPENDENCIES 
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');


// SCHEMA 
var userSchema = mongoose.Schema({
	is_artist: Boolean,
	is_host: Boolean,
	local: {
		email: String,
		password: String
	},
	artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'artists'
    },
    host: {
       	type: mongoose.Schema.Types.ObjectId,
        ref: 'hosts'
    }
});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
	console.log("is valid???", password);
	console.log("local password:", this.local.password)
    return bcrypt.compareSync(password, this.local.password);
};

var Users = mongoose.model('users', userSchema);


//RETURN MODEL 
module.exports.model = Users;

module.exports.index = (req, res) => {
	Users.find({}, (err, users) => {
		if (err) throw err;
		res.send(users)
	})
}

// CREATE ARTIST
module.exports.createUser = (req, res) => {
	// console.log(req.params)
	Users.create(req.params, (err) => {
		if (err) throw err;
		res.send('Created new user!')
	})
}

// GET SINGLE User
module.exports.getSingleUser = (req, res) => {
	// console.log(req.params.id)
	Users.find({id: req.params.id }, (err, user) => {
		if (err) throw err;
		res.send(user);
	})
};

// DELETE ARTIST BY ID
module.exports.destroy = (req, res) => {
	// console.log(req.params)
	Users.find({id: req.params.id }, (err, user) => {
		if (err) throw err;
		user.remove(function(err){
			if (err) throw err;
			console.log("user/artist deleted!");
		})
	})
};


// GET SINGLE ARTIST BY ID AND UPDATE
module.exports.updateSingleUser = (req, res) => {
	// console.log(req.params)
	Users.findByIdAndUpdate(req.params.id, req.params, (err, user) => {
		if (err) throw err;
		res.send('Found by Id and Updated!')
	})
};













