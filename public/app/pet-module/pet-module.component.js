'use strict';
angular.module('petModule', []);
angular.module('petModule')
    .component('petModule', {
        templateUrl:'/app/pet-module/pet-module.html',
        controller: function($rootScope,$scope, $http,$location,$routeParams,petsResources) {
        	
        	if($routeParams.id){
        		$scope.datosPet=petsResources.getbyowner({owner: $routeParams.id});
        	}
        	
    	}
     	
     });
