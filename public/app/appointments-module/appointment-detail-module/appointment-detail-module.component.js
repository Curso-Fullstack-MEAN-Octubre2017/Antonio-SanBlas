'use strict';
angular.module('appointmentDetailModule', []);
angular.module('appointmentDetailModule')
    .component('appointmentDetailModule', {
        templateUrl:'/app/appointments-module/appointment-detail-module/appointment-detail-module.html',
        controller: function($scope, $http) {
        	
        	 var id = "";
        
             $scope.$on("appointment:showApp",(event,datos)=>{
            	 
            	 id=datos.id;
            	
            	 $http.get('api/appointments/'+id).then(
                		 function(response) {
                			
                			$scope.datos=response.data;
                			$scope.datos.fecha_inicio=moment($scope.datos.fecha_inicio).toDate()
                		 }
                );
             })
            

         
        	
        }
    });