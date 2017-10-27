'use strict';
angular.module('petModule', []);
angular.module('petModule')
    .component('petModule', {
        templateUrl:'/app/pet-module/pet-module.html',
        controller: function($rootScope,$scope, $http,$location,$routeParams,petsResources) {
        	
        	$rootScope.$on("message:success", function(event, message) {
				alert(message.message);
        	})
        	
        	if($routeParams.id){
        		$scope.datosPet=petsResources.getbyowner({owner: $routeParams.id});
        	}
        	
        	
        	$scope.borrarMascota=function(id,owner){
            	var own= owner;
        		petsResources.delete({id: id}, function(pet) {
        			$scope.$emit("message:success", {message:"Mascota borrada con exito"});	
        			$scope.datosPet=petsResources.getbyowner({owner: owner});
        			$location.path('/customer/'+owner);
        		}, function(error) {});	
        
        	}
        	
       
        	
    	}
     	
     });
