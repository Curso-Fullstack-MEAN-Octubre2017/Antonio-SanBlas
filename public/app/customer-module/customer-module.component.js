'use strict';

angular.module('customerModule')
    .component('customerModule', {
        templateUrl:'/app/customer-module/customer-module.html',
        controller: function($scope, $http) {
        	$http.get('api/customers').then(function(response){
        		$scope.datos=response.data;     	        		
         	})
         	
         	
        }
    });