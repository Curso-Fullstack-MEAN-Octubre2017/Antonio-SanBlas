'use strict';
angular.module('customerModule', []);
angular.module('customerModule')
    .component('customerModule', {
        templateUrl:'/app/customer-module/customer-module.html',
        controller: function($rootScope, $scope, $http,$routeParams,$location,customersResources) {
        	
        	$scope.datos=customersResources.query()
 
        	
        	$rootScope.$on("message:success", function(event, message) {
        				alert(message.message);
        	})
        		
        	$scope.borrarCliente=function(id){
        	
        		customersResources.delete({id: id}, function() {
        			$scope.$emit("message:success", {message:"Cliente borrado con exito"});
        			$location.path('/customers');
        		}, function(error) {});	
        		$location.path('/customers');
        	}
        	
        	
        }
    });