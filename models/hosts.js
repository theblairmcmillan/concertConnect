// DEPENDENCIES 
var restful = require('node-restful');
var mongoose = restful.mongoose;


// SCHEMA 
var hostsSchema = new mongoose.Schema({
	name: String,
	location: String,
	vanue: String,
	genre: String,
	website: String,
	accomodations: String,
	about: String,
	id: Number,

});


//RETURN MODEL 
module.exports = restful.model('hosts',hostsSchema)