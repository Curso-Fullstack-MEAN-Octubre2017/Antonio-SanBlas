const Appointment = require('../models/appointments');
const Customer = require('../models/customers');
const Pet = require('../models/pets');
var moment = require('moment');
require('moment/locale/es');

module.exports = (router) =>{
	
	router.get('/appointments', (req, res) => {
		Appointment.find((err, appointments) => {
			if (err) {
				console.error(err);
			} else {
				res.json(appointments);
			}
		});
	})
	
	router.get('/appointment/:id', (req, res) => {

		Appointment.findById(req.params.id,(err, appointment) => {
			if (err) {
				console.error(err);
			} else {
				res.json(appointment);
			}
		});
		})
		
		router.post('/appointment', (req, res) => {
		   //var fecha=moment(req.body.fecha_inicio).format('YYYYMM');
		   //var month = moment(fecha,"MMMM");
		   //console.log(fecha);
		   
		   var params = req.body;
		   var appointment = new Appointment(params);
		   appointment.save((err, appointmentStored) => {
		   res.status(200).send({appointment: appointmentStored});
		   console.log(err)
		   });
		
		})
		
		router.put('/appointment/:id', (req, res) => {
			Appointment.findOneAndUpdate({_id :req.params.id},req.body,{upsert: true},(err, appointmentStored) => {
			if (err) {
				console.error(err);
			} else {
				res.json(appointmentStored);
			}
		});

		});
	
	router.get('/appointment/:month', (req, res) => {
		
		
		var year=moment(req.body.fecha_inicio).format('YYYY');
		var month=moment(req.body.fecha_inicio).format('MM');
		var day=moment(req.body.fecha_inicio).format('DD');
		
		Appointment.find({},(err, appointment).where('fecha_inicio') => {
			if (err) {
				console.error(err);
			} else {
				res.json(appointment);
			}
		});
		})
	
	
	
	
	
	
	return router;

}