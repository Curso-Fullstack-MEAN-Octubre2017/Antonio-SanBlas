'use strict';

angular.module('petModule')
    .component('petModule', {
        templateUrl:'/app/pet-module/pet-module.html',
        controller: function($scope, $http,$location,$routeParams) {
        	
        	$http.get('api/pets/'+$routeParams.id).then(function(responsePet){
            	//console.log('entro a pet')
        		$scope.datosPet=responsePet.data;	
        	 	
        	 });
       
    	}
     	
     });
