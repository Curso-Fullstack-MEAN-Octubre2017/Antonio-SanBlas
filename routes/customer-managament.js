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
		
	router.get('/customers/:id', (req, res) => {
		
		
		Customer.findById(req.params.id,(err, customers) => {
			if (err) {
				console.error(err);
			} else {
				res.json(customers);
			}
		});
	})
	router.post('/customers', (req, res) => {	
		var params = req.body;
		var customer = new Customer(req.body);
		customer.save((err, customerStored) => {
			res.json(customerStored);
			console.log(err)
		});
		
	})
		
	router.put('/customers/:id', (req, res) => {
		Customer.findOneAndUpdate({_id :req.params.id},req.body,{upsert: true},(err, customerStored) => {
			if (err) {
				console.error(err);
			} else {
				res.json(customerStored);
			}
		});

	});
	
	router.delete('/customerDel/:id', (req, res) => {
		
		Customer.remove({ _id: req.params.id }, function (err) {
			  if (err) 
				  return handleError(err)
				
		});	
	})


		return router;
}