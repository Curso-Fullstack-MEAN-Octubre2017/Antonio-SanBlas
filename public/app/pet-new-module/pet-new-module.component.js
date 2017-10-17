'use strict';

angular.module('petNewModule')
    .component('petNewModule', {
        templateUrl:'/app/pet-new-module/pet-new-module.html',
        controller: function($scope, $http,$location,$routeParams) {
        	$http.get('api/pet/'+$routeParams.id).then(function(responsePet){
            	console.log('entro a pet edit')
        		$scope.datosPet=responsePet.data;	
        	 	
        	 });
        	$scope.datosMascota=function(){
        		
        			console.log('put mascota')
        			$http.put('/api/pet/'+$routeParams.id,{
            			"name": $scope.datosPet.name,
            			"birthday": $scope.datosPet.birthday,
            			"species": $scope.datosPet.species,
            			"race": $scope.datosPet.race,
            			"sex":$scope.datosPet.sex,
            			"photoURL": $scope.datosPet.photoURL,
            			"chipNumber": $scope.datosPet.chipNumber,
            			"description":$scope.datosPet.description,
            			"ownerID": $scope.datosPet.ownerID
            		})
	
        		}
        	$scope.crearMascota=function(){
        			console.log('post mascota')
        			$http.post('/api/pet/'+$routeParams.id,{
        				"name": $scope.datosPet.name,
            			"birthday": $scope.datosPet.birthday,
            			"species": $scope.datosPet.species,
            			"race": $scope.datosPet.race,
            			"sex":$scope.datosPet.sex,
            			"photoURL": $scope.datosPet.photoURL,
            			"chipNumber": $scope.datosPet.chipNumber,
            			"description":$scope.datosPet.description,
            			"ownerID": $routeParams.id
        		})
        		
        		$location.path('/customer/'+$routeParams.id);
        	}
        		
        	}
        	
    	});
