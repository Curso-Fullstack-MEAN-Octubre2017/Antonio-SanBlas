'use strict';
angular.module('appointmentDetailModule', []);
angular.module('appointmentDetailModule')
    .component('appointmentDetailModule', {
        templateUrl:'/app/appointments-module/appointment-detail-module/appointment-detail-module.html',
        controller: function($scope, $http,$routeParams,$location) {
        	
        	
             
             $http.get('api/appointments/'+$routeParams.id).then(
            		 function(response) {
            			
            			 $scope.datos=response.data;

            		 });

         
        	
        }
    });