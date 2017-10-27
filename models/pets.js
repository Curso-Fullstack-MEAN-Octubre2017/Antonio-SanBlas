const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');
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
	owner:{type: Schema.ObjectId, ref: "Customer", required: true}
});
module.exports = mongoose.model('Pet',petSchema);