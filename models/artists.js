"use strict";
// DEPENDENCIES 
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Users = require('./users').model;

// SCHEMA 
var artistSchema = mongoose.Schema({
	name: String,
	hometown: String,
	age: Number,
	genre: String,
	group_size: Number,
	website: String,
	about: String,
	tel: Number,
	image: String
});

var Artists = mongoose.model('artists', artistSchema);


//RETURN MODEL 
module.exports.model = Artists;

module.exports.index = (req, res) => {
	Artists.find({}, (err, artists) => {
		if (err) throw err;
		res.send(artists)
	})
}

// CREATE ARTIST
module.exports.createArtist = (req, res) => {
	// console.log(req.params)
	console.log("artist params:", req.body);
	var newArtist = new Artists(req.body);
	newArtist.save();

	Users.findByIdAndUpdate(req.body.user, {$set:{artist:newArtist}}, (err, data) => {
		if (err) throw err;
		res.send(newArtist)
	})
}

// GET SINGLE User
module.exports.getSingleArtist = (req, res) => {
	// console.log(req.params.id)
	Artists.find({id: req.params.id }, (err, artist) => {
		if (err) throw err;
		res.send(artist);
	})
};

// DELETE ARTIST BY ID
module.exports.destroy = (req, res) => {
	// console.log(req.params)
	Artists.find({id: req.params.id }, (err, artist) => {
		if (err) throw err;
		artist.remove(function(err){
			if (err) throw err;
			console.log("artist/artist deleted!");
		})
	})
};


// GET SINGLE ARTIST BY ID AND UPDATE
module.exports.updateSingleArtist = (req, res) => {
	// console.log(req.params)
	Artists.findByIdAndUpdate(req.params.id, req.params, (err, artist) => {
		if (err) throw err;
		res.send('Found by Id and Updated!')
	})
};