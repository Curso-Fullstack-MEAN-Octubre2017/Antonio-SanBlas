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