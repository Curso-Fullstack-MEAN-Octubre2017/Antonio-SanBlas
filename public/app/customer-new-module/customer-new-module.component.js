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
        			$http.put('/api/customer/'+$routeParams.id,$scope.datos)
	
        		}else{
        			console.log('post')
        			$http.post('/api/customer',$scope.datos)
        		}
        		$location.path('/customers')
        	}
        
        
	    
        }
    });

    