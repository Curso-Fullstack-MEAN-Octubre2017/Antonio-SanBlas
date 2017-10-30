'use strict';
angular.module('appointmentsModule', []);
angular.module('appointmentsModule')
    .component('appointmentsModule', {
        templateUrl:'/app/appointments-module/appointments-module.html',
        controller: function($scope, $http,$routeParams,$location) {
        	
	       	moment.locale("es");
	        $scope.date = $routeParams.date;
       
        	$scope.$on("appointment:showAppClick",(event,datos)=>{
        		
        		$scope.$broadcast("appointment:showApp",datos)
        		
        	});
        	
        	
        }
    });