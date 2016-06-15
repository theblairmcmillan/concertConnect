// DEPENDENCIES 
var restful = require('node-restful');
var mongoose = restful.mongoose;


// SCHEMA 
var productSchema = new mongoose.Schema({
	name: String,
	sku: String,
	price: Number

});





//RETURN MODEL 
module.exports = restful.model('Products',productSchema)