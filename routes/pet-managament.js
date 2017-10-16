const Pet = require('../models/pets');

module.exports = (router) =>{
	
	router.get('/pets', (req, res) => {
		Pet.find((err, pets) => {
			if (err) {
				console.error(err);
			} else {
				res.json(pets);
			}
		});
		})
		
		router.get('/pets/:id', (req, res) => {
		
			Pet.find({ 'ownerID': req.params.id }, 'name birthday species race sex', function (err, pet) {
				if (err) {
					console.error(err);
				} else {
					res.json(pet);
				}
			})
	
		})
		router.get('/pet/:id', (req, res) => {
		
			Pet.findById(req.params.id,(err, pet) => {
				if (err) {
					console.error(err);
				} else {
					res.json(pet);
				}
			})
	
		})
		
		router.post('/pet', (req, res) => {
		   //console.log('postModelo')
		   var params = req.body;
		
		   var pet = new Pet({
			   name : params.name,
			   birthday : params.birthday,
			   species : params.species,
			   race : params.race,
			   sex : params.sex,
			   photoURL : params.photoURL,
			   chipNumber : params.chipNumber,
			   description : params.description,
			   ownerID : params.ownerID
		   });
		   pet.save((err, petStored) => {
		   res.status(200).send({pet: petStored});
		   console.log(err)
		   });
		
		})
		router.put('/pet/:id', (req, res) => {
		Pet.findOneAndUpdate({_id :req.params.id},req.body,{upsert: true},(err, petStored) => {
			if (err) {
				console.error(err);
			} else {
				//res.json(petStored);
				Pet.find((err, pets) => {
					if (err) {
						console.error(err);
					} else {
						res.json(pets);
					}
				})
			}
		});

	});
	
	return router;
}
