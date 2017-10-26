'use strict';
angular.module('petNewModule', []);
angular.module('petNewModule')
    .component('petNewModule', {
        templateUrl:'/app/pet-new-module/pet-new-module.html',
        controller: function($scope, $http,$location,$routeParams,petsResources) {
        	
        	$scope.datosPet=petsResources.get({id:$routeParams.id})
        	
        	$scope.datosMascota=function(){
	        		var objPet={
	            			"name": $scope.datosPet.name,
	            			"birthday": $scope.datosPet.birthday,
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
        	
        		
        		$location.path('/customer/'+$routeParams.id);
        	}
        		
        	}
        	
    	});
