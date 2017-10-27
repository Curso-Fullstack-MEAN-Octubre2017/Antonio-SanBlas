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
		
		router.get('/pet/:owner', (req, res) => {
			
			Pet.find({ 'owner': req.params.owner }, function (err, pet) {
				if (err) {
					console.error(err);
				} else {
					res.json(pet);
				}
			})
	
		})
	
		router.get('/pets/:id', (req, res) => {
		
			Pet.findById(req.params.id,(err, pet) => {
				if (err) {
					console.error(err);
				} else {
					res.json(pet);
				}
			})
	
		})
		
		router.post('/pets', (req, res) => {
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
			   owner : params.owner
		   });
		   pet.save((err, petStored) => {
		   res.status(200).send({pet: petStored});
		   console.log(err)
		   });
		
		})
		router.put('/pets/:id', (req, res) => {
		Pet.findOneAndUpdate({_id :req.params.id},req.body,{upsert: true},(err, petStored) => {
			if (err) {
				console.error(err);
			} else {
				Pet.find((err, pets) => {
					if (err) {
						console.error(err);
					} else {
						res.json(petStored);
					}
				})
			}
		});

	});
	router.delete('/pets/:id', (req, res) => {
	
		Pet.remove({ _id: req.params.id }, function (err) {
			  if (err) {
				  return handleError(err)
			  }
			 // res.sendStatus(200);
			  res.status(200).send();
			  
				
		});	
	
	})
	
	return router;
}
