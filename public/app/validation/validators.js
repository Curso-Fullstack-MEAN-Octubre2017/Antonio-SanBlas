if (typeof validate !== "function") { 
	validate = require("validate.js");
}

const Validators = {
	validateCustomer : function(customer) {
		return validate(customer, {
			firstName : {
				presence : true,
				exclusion : {
					within : [ "nopermitido" ],
					message : "'%{value}' is not allowed"
				},
				length : {
					minimum : 3,
					maximum: 20,
					message : "debe tener entre 4 y 20 caracteres"
				}
			}
		});
	},

	validatePet : function(pet) {
		return validate(pet, {
			name : {
				presence : true,
				length : {
					minimum : 3,
					maximum : 20,
					message : "debe tener entre 4 y 20 caracteres"
				}
			}
		});
	},
}

if (typeof module !== "undefined" && module.exports) { // estamos en el servidor
	module.exports = Validators;
}