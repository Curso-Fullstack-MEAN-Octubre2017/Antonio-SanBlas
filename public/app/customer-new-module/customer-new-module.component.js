'use strict';

angular.module('customerNewModule')
    .component('customerNewModule', {
        templateUrl:'/app/customer-new-module/customer-new-module.html',
        controller: function($scope, $http,$location,$routeParams) {
	    
        $http.get('api/customer/'+$routeParams).then(function(response){
    	 	$scope.datos=response.data;	
    	 });	
        	
        $scope.mandarDatos=function(){
        		$http.post('/api/customer',{
        			"firstName": $scope.firstName,
        			"lastName": $scope.lastName,
        			"mail": $scope.mail,
        			"phone": $scope.phone,
        			"dni":$scope.dni,
        			"note": $scope.note
        		})
        		$location.path('/customers')
        	}
	    
        }
    });

    