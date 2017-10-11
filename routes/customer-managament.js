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
		
	router.get('/customer/:_id', (req, res) => {
		var iden=req.params.id;
		console.log(iden + 'Funciono')
		Customer.find('',(err, customers) => {
			if (err) {
				console.error(err);
			} else {
				res.json(customers);
			}
		});
		})
	router.post('/customer', (req, res) => {
		   
		   var customer = new Customer();
		   var params = req.body;
		   console.log(params);
		   customer.dni = params.dni;
		   customer.firstName = params.firstName;
		   customer.lastName = params.lastName;
		   customer.phone = params.phone;
		   customer.mail = params.mail;
		   customer.note = params.note;
		   
		   customer.save((err, customerStored) => {
		   res.status(200).send({customer: customerStored});

		   });
		
		})

/*
var sampleCustomer = {
		"dni": "rrrrrr",
		"firstName": "pedro",
		"lastName": "gonzalez",
		"phone": "r",
		"email": "pedro@gonzalez.com",
		"note": "drrr",
	};

function testInsertCustomer() {
	const customer = new Customer;
	customer.save((err) => {
		if (err) {
			console.error(err);
		} else {
			console.log("testInsertCustomer", customer);
		}
	})
}

function testSearchCustomers() {
	var search = {};
	var regexp = new RegExp("gonzalez", "i")
	search.firstName = regexp;
	search.lastName = regexp;
	console.log("Search customers:", search);
	
	Customer.find(search, (err, customers) => {
		if (err) {
			console.error(err);
		} else {
			console.log("testSearchCustomers", customers);
		}
	}).sort({'_id' : -1});
}

function testGetAll(){
	Customer.find((err, customers) => {
		if (err) {
			console.error(err);
		} else {
			console.log("testSearchCustomers", customers);
		}
	});
}

//testInsertCustomer();
//testSearchCustomers();
*/
		return router;
}