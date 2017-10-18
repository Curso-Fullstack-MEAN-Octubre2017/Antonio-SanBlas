const mongoose = require('mongoose');

const Pet = mongoose.model('Pet');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
	
	fecha_inicio:{type:Date},
	fecha_fin:{type:Date},
	pet:{type: Schema.ObjectId, ref: "Pet", required: true},
	vetID:{type:String},
	note:{type:String},
	estate:{type:String}//1-cancelada 0-pendiente 1-en curso 2-terminada
});
module.exports = mongoose.model('Appointment',appointmentSchema);