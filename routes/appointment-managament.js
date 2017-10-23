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
	
	router.get('/appointments/:id', (req, res) => {

		Appointment.findById(req.params.id,(err, appointment) => {
			if (err) {
				console.error(err);
			} else {
				res.json(appointment);
			}
		});
	})
		
		router.post('/appointments', (req, res) => {
		
		   var params = req.body;
		   var appointment = new Appointment(params);
		   appointment.save((err, appointmentStored) => {
			   res.status(200).send({appointment: appointmentStored});
			   console.log(err)
		   });
		
		})
		
		router.put('/appointments/:id', (req, res) => {
			Appointment.findOneAndUpdate({_id :req.params.id},req.body,{upsert: true},(err, appointmentStored) => {
				if (err) {
					console.error(err);
				} else {
					res.json(appointmentStored);
				}
			});

		});
	
	router.get('/appointments/:from/:to', (req, res) => {
		
		var initdate = req.params.from;
	    var endDate = req.params.to;
	    
	    
	    
	    initdate = moment(initdate, "YYYYMM").toDate();
	    endDate = moment(endDate, 'YYYYMM').add(1,'M').toDate();

	   Appointment.find({fecha_inicio:{$gte: initdate, $lte: endDate}},(err, appointment) => {
			if (err) {
				res.json(err)
			} else{
				var appointmentDate = appointment.reduce(function (mapa, item) {
					
					var date=moment(item.fecha_inicio).format('YYYY-MM-DD');
					var time=moment(item.fecha_inicio).utc().format('HH:mm');
			
					if(!mapa) 
						var mapa={};
					
					if (!mapa[date]) 	
						mapa[date] = {};
					  	
	                if (!mapa[date][time])      	
	                	mapa[date][time] = item;
	                	
	                return mapa;
				},{})
				res.json(appointmentDate);
			}
			}).populate({
			  path:'pet',
			  model:'Pet',
			  select:'name species',
			  populate: {
		           path: 'owner',
		           model: 'Customer',
		           select: 'firstName lastName'
		     }
		  }).sort({'initdate': 1})
		})
	
		console.log('entro')
		

			
	return router;

}