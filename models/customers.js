const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const clientSchema = new Schema({
	_id:{type:String,required:true},
	firstName:{type:String, required:true},
	lastName:{type:String, required:true},
	mail:{type:String},
	phone:{type:String, required:true},
	dni:{type:String, required:true},
	nota:{type:String}
});
module.exports = mongoose.model('Customer',clientSchema);

