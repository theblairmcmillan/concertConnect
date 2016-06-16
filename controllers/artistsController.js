"use strict";

const ArtistsModel = require('../models/artists');

module.exports.index = (req, res) => {
	ArtistsModel.index(req, res);
};

module.exports.createArtist = (req, res) => {
	ArtistsModel.createArtist(req, res);
};

