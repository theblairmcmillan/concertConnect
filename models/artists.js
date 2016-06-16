"use strict";
// DEPENDENCIES 
var mongoose = require('mongoose');


// SCHEMA 
var Artists = mongoose.model('artists', mongoose.Schema({
	name: String,
	hometown: String,
	age: Number,
	genre: String,
	group_size: Number,
	website: String,
	about: String,
	tel: Number
}));


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
	console.log(req.params)
	Artists.create(req.params, (err) => {
		if (err) throw err;
		res.send('Created new artist!')
	})
}

// GET SINGLE ARTIST
module.exports.getSingleArtist = (req, res) => {
	console.log(req.params.id)
	Artists.find({id: req.params.id }, (err, artist) => {
		if (err) throw err;
		res.send(artist);
	})
};

// DELETE ARTIST BY ID
module.exports.destroy = (req, res) => {
	console.log(req.params)
	Artists.find({id: req.params.id }, (err, artist) => {
		if (err) throw err;
		artist.remove(function(err){
			if (err) throw err;
			console.log("user/artist deleted!");
		})
	})
};


// GET SINGLE ARTIST BY ID AND UPDATE
module.exports.updateSingleArtist = (req, res) => {
	console.log(req.params)
	Artists.findbyIdAndUpdate(req.params.id, {req.params}, (err, artist) => {
		if (err) throw err;
		res.send('Found by Id and Updated!')
	})
};




