const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const petSchema = new Schema({
	
	firstName:{type:String},
	lastName:{type:String},
	mail:{type:String},
	phone:{type:String},
	dni:{type:String},
	note:{type:String}
});
module.exports = mongoose.model('Customer',clientSchema);