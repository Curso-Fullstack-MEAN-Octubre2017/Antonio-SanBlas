'use strict';
angular.module('petNewModule', []);
angular.module('petNewModule')
    .component('petNewModule', {
        templateUrl:'/app/pet-new-module/pet-new-module.html',
        controller: function($scope, $http,$location,$routeParams,petsResources) {
        	
        	
        	$scope.datosPet = petsResources.get({id: $routeParams.id}, function(pet){                
                var fecha = $scope.datosPet.birthday;
                $scope.datosPet.birthday = moment(fecha).toDate();        
            })
        	
        	
        		
        		
        	$scope.datosMascota=function(){
        		
        		
        		
        		const validationErrors = Validators.validatePet($scope.datosPet);
        		if(validationErrors) {
        			return alert(JSON.stringify(validationErrors));
        		}    		
        		
        		var errorCallback = function(response) { 
        			$scope.$emit("message:error", {message: response.statusText})
        		}
       
        	
	        		var objPet={
	            			"name": $scope.datosPet.name,
	            			"birthday":$scope.datosPet.birthday,
	            			"species": $scope.datosPet.species,
	            			"race": $scope.datosPet.race,
	            			"sex":$scope.datosPet.sex,
	            			"photoURL": $scope.datosPet.photoURL,
	            			"chipNumber": $scope.datosPet.chipNumber,
	            			"description":$scope.datosPet.description,
	            			"owner": $scope.datosPet.owner
	            			}
        			
        			
        			petsResources.update({id:$routeParams.id},objPet, 
        				function(pet) {$scope.datosPet=pet;}, function(error) {})
        			$scope.$emit("message:success", {message:"Mascota actualizada con exito"})	
            		$location.path('/customer/'+$scope.datosPet.owner);
        		}
        	$scope.crearMascota=function(){
        			console.log('post mascota')
        			var objPet={"name": $scope.datosPet.name,
            			"birthday": $scope.datosPet.birthday,
            			"species": $scope.datosPet.species,
            			"race": $scope.datosPet.race,
            			"sex":$scope.datosPet.sex,
            			"photoURL": $scope.datosPet.photoURL,
            			"chipNumber": $scope.datosPet.chipNumber,
            			"description":$scope.datosPet.description,
            			"owner": $routeParams.id}
        			
        			petsResources.save({}, objPet, function(pet) {
        				$scope.datosPet=pet;
        				$scope.$emit("message:success", {message:"Cliente dado de alta con exito"});
        			}, function(error) {});
        			$scope.$emit("message:success", {message:"Mascota dada de alta con exito"})	
        	
        		
        		$location.path('/customer/'+$routeParams.id);
        	}
        		
        	}
        	
    	});
