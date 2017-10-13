const Customer = require('../models/customers');

module.exports = (router) =>{
	
	router.get('/customers', (req, res) => {
		Customer.find((err, customers) => {
			if (err) {
				console.error(err);
			} else {
				res.json(customers);
			}
		});
		})
		
	router.get('/customer/:id', (req, res) => {
		
		
		Customer.findById(req.params.id,(err, customers) => {
			if (err) {
				console.error(err);
			} else {
				res.json(customers);
			}
		});
		})
	router.post('/customer', (req, res) => {
		   console.log('postModelo')
		    var params = req.body;
		   console.log(params)
		   var customer = new Customer({
			   dni : params.dni,
			   firstName : params.firstName,
			   lastName : params.lastName,
			   phone : params.phone,
			   mail : params.mail,
			   note : params.note
		   });
		   customer.save((err, customerStored) => {
		   res.status(200).send({customer: customerStored});
		   console.log(err)
		   });
		
		})
		
		router.put('/customer/:id', (req, res) => {
		Customer.findOneAndUpdate({_id :req.params.id},req.body,{upsert: true},(err, customerStored) => {
			if (err) {
				console.error(err);
			} else {
				Customer.find((err, customers) => {
					if (err) {
						console.error(err);
					} else {
						res.json(customers);
					}
				})
			}
		});

	});
	router.delete('/customerDel/:id', (req, res) => {
		console.log(req.params.id);
		
		Customer.remove({ _id: req.params.id }, function (err) {
			  if (err) 
				  console.error(err);
			  else
				  res.json({ha:'funcionado'});
			});	
	})


		return router;
}