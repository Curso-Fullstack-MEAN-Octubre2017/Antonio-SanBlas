'use strict';
angular.module('customerModule', []);
angular.module('customerModule')
    .component('customerModule', {
        templateUrl:'/app/customer-module/customer-module.html',
        controller: function($rootScope, $scope, $http,$routeParams,$location,customersResources) {
        	$scope.datos=customersResources.query()
        	//console.log($rootScope.$on)
        	
        	$rootScope.$on("message:success", function(event, message) {
        				alert(message.message);
        	})
        		
        	$scope.borrarCliente=function(id){
        		console.log(id);
        		customersResources.delete({id: id}, function() {}, function(error) {});	
        		$location.path('/customers');
        	}
        		
        		
        	
        }
    });