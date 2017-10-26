'use strict';
angular.module('customerNewModule', []);
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
        	/*
        	const validationErrors = Validators.validateCustomer($scope.customer);
    		if(validationErrors) {
    			return alert(JSON.stringify(validationErrors));
    		}    		
    		
    		var errorCallback = function(response) { 
    			$scope.$emit("message:error", {message: response.statusText})
    		}*/
        	
        	
        	if($routeParams.id){     		
        		customersResources.update({id: $scope.datos._id}, $scope.datos, function(customer) {
        			$scope.$emit("message:success", {message: "Cliente actualizado con exito"})
        			$location.path("/customers");
        		}, function(error) {});
        	}else{ 		
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
        	
        }
        
        
        
     	
        
        
        
	    
        }
    });

    