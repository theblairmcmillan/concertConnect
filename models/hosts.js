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
	about: String
}));


//RETURN MODEL 
module.exports.model = Hosts;

module.exports.index = (req, res) => {
	Hosts.find({}, (err, hosts) => {
		if (err) throw err;
		res.send(hosts)
	})
}

module.exports.createArtist = (req, res) => {
	console.log(req.params)
	Artists.create(req.params, (err) => {
		if (err) throw err;
		res.send('Created new host!')
	})
}