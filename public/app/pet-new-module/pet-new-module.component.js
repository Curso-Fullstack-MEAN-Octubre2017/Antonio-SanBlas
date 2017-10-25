'use strict';

angular.module('petNewModule')
    .component('petNewModule', {
        templateUrl:'/app/pet-new-module/pet-new-module.html',
        controller: function($scope, $http,$location,$routeParams,petsResources) {
        	
        	$scope.datosPet=petsResources.get({id:$routeParams.id})
        	console.log($scope.datosPet)
        	/*
        	$http.get('api/pet/'+$routeParams.id).then(function(responsePet){
            	console.log('entro a pet edit')
        		$scope.datosPet=responsePet.data;	
        	 	
        	 });*/
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
        			
        			
        			petsResources.update({id:$routeParams.id},objPet, function(pet) {}, function(error) {})
        			
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
        			
        			petsResources.save({}, objPet, function(pet) {}, function(error) {});
        	
        		
        		$location.path('/customer/'+$routeParams.id);
        	}
        		
        	}
        	
    	});
