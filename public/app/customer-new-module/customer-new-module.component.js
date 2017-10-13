'use strict';

angular.module('customerNewModule')
    .component('customerNewModule', {
        templateUrl:'/app/customer-new-module/customer-new-module.html',
        controller: function($scope, $http,$location,$routeParams) {
        	
        $http.get('api/customer/'+$routeParams.id).then(function(response){
        	$scope.datos=response.data;	
    	 	
    	 });	
        	
        $scope.mandarDatos=function(){
        		if($routeParams.id){
        			console.log('put')
        			$http.put('/api/customer/'+$routeParams.id,{
            			"firstName": $scope.datos.firstName,
            			"lastName": $scope.datos.lastName,
            			"mail": $scope.datos.mail,
            			"phone": $scope.datos.phone,
            			"dni":$scope.datos.dni,
            			"note": $scope.datos.note
            		})
	
        		}else{
        			console.log('post')
        			$http.post('/api/customer',{
        			"firstName": $scope.datos.firstName,
        			"lastName": $scope.datos.lastName,
        			"mail": $scope.datos.mail,
        			"phone": $scope.datos.phone,
        			"dni":$scope.datos.dni,
        			"note": $scope.datos.note
        		})
        		}
        		$location.path('/customers')
        	}
        
        
	    
        }
    });

    