const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const petSchema = new Schema({
	
	name:{type:String},
	birthday:{type:Date},
	species:{type:String},
	race:{type:String},
	sex:{type:String},
	photoURL:{type:String},
	chipNumber:{type:String},
	description:{type:String},
	ownerID:{type:String}
});
module.exports = mongoose.model('Pet',petSchema);