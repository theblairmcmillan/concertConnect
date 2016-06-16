// DEPENDENCIES 
var restful = require('node-restful');
var mongoose = restful.mongoose;


// SCHEMA 
var Artists = mongoose.model('artists', mongoose.Schema({
	name: String,
	hometown: String,
	age: Number,
	genre: String,
	partyOf: Number,
	website: String,
	about: String,
	id: Number
}));


//RETURN MODEL 
module.exports.model = Artists;

module.exports.index = (req, res) => {
	Artists.find({}, (err, artists) => {
		if (err) throw err;
		res.send(artists)
	})
}

module.exports.createArtist = (req, res) => {
	console.log(req.params)
	Artists.create(req.params, (err) => {
		if (err) throw err;
		res.send('Created new artist!')
	})
}