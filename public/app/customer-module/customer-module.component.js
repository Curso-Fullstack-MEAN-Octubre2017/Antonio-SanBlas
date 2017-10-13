'use strict';

angular.module('customerModule')
    .component('customerModule', {
        templateUrl:'/app/customer-module/customer-module.html',
        controller: function($scope, $http,$routeParams,$location) {
        	$http.get('api/customers').then(function(response){
        		$scope.datos=response.data;     	        		
         	})
         	$http.delete('api/customerDel/'+$routeParams.id).then(function(response){
         		$location.path('/customers')     	        		
         	})
         	
        }
    });