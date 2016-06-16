"use strict";

const ArtistsModel = require('../models/artists');

module.exports.index = (req, res) => {
	ArtistsModel.index(req, res);
};

//CREATE ARTIST
module.exports.createArtist = (req, res) => {
	ArtistsModel.createArtist(req, res);
};

// GET SINGLE ARTIST
module.exports.getSingleArtist = (req, res) => {
	ArtistsModel.getSingleArtist(req, res);
};

// DELETE 
module.exports.destroy = (req, res) => {
	ArtistsModel.destroy(req, res);
};

// UPDATE SINGLE ARTIST
module.exports.updateSingleArtist = (req, res) => {
	ArtistsModel.updateSingleArtist(req, res);
};

