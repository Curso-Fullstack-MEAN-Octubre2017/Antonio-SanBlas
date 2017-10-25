'use strict';

angular.module('customerNewModule')
    .component('customerNewModule', {
        templateUrl:'/app/customer-new-module/customer-new-module.html',
        controller: function($scope, $http,$location,$routeParams,customersResources) {
        	
        	if($routeParams.id){
        		$scope.datos=customersResources.get({id : $routeParams.id})
        	}else{
        		$scope.datos={}
        	}
        
        	
        $scope.mandarDatos=function(){
        	if($routeParams.id){
        		console.log('entro en put')
        		customersResources.update({id: $scope.datos._id}, $scope.datos, function(customer) {}, function(error) {});
        	}else{
        		console.log('entro en post')
        		customersResources.save({}, $scope.datos, 
        				function(customer) {
        					$scope.$emit("message:success", {message:"Cliente dado de alta con exito"})
        					$location.path("/customers");
        				}, 
        				function(error) {
        					console.log(error)
        				}
        		);
	
        	}
        	//$location.path('/customers')
        }
        
        
        
     	
        
        
        
	    
        }
    });

    