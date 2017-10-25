'use strict';

angular.module('petModule')
    .component('petModule', {
        templateUrl:'/app/pet-module/pet-module.html',
        controller: function($scope, $http,$location,$routeParams,petsResources) {
        
        	
        	
        	//$scope.datosPet=petsResources.getbyowner({owner: $routeParams.id});
        	
        	$http.get('api/pet/'+$routeParams.id).then(function(responsePet){
            	
        		$scope.datosPet=responsePet.data;	
        	 	
        	 });
 
        	
    	}
     	
     });
