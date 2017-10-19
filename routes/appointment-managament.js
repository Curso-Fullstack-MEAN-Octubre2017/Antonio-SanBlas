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
	
	router.get('/appointments/:month', (req, res) => {
		
		var initdate = req.params.month;
	    var enddate = req.params.month;

	    initdate = moment(initdate, "YYYYMM");
	    enddate = moment(enddate, 'YYYYMM').add(1,'M')
	    enddate.subtract(1,'day');
	    
	    console.log(initdate);
	    console.log(enddate);
	    
	    Appointment.aggregate([
	    	{
	    		"$match":{
	    			$gte : new Date(initdate),
	    			$lte : new Date(enddate)
	    		}
	    	},
	    	{
	    		"$group":{
	    			_id:{$dayOfYear:"$from"},
	    			date: {"$first":"$from"},
	    			total:{$sum:1}
	    		}
	    	}
	    ],function(err,appointment){
	    	if (err) {
				console.error(err);
			} else {
				console.log(appointment);
				
			}
	    }
	    )
	    
	    /** Appointment.find({fecha_inicio:{$gt: from, $lt: to}},'fecha_inicio fecha_fin pet',(err, appointment) => {
			if (err) {
				console.error(err);
			} else {
				res.json(appointment);
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
		  })**/
		})
		
		
		
		router.get('/appointments/:month/:day', (req, res) => {
		
		var from = req.params.month;
	    var to = req.params.day;
	    to = from +''+to;
	    from = moment(to, "YYYYMMDD");
	    to = moment(to, "YYYYMMDD").add(1,'day')
	    to.subtract(1,'minute');;
	    console.log(from);
	    console.log(to);
	    Appointment.find({fecha_inicio:{$gt: from, $lt: to}},'fecha_inicio fecha_fin pet',(err, appointment) => {
			if (err) {
				console.error(err);
			} else {
				res.json(appointment);
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
		  })
		})
		
		

			
	return router;

}