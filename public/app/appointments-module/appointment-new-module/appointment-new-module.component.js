'use strict';
angular.module('appointmentNewModule', []);
angular.module('appointmentNewModule')
    .component('appointmentNewModule', {
        templateUrl:'/app/appointments-module/appointment-new-module/appointment-new-module.html',
        bindings: {
        	id: '='
        },
        controller: function($scope, $http) {
        	
        	
        	
        	$scope.$on("appointment:newApp",(event,datos)=>{
           	 
           	 var id=datos.id;
           	 console.log(datos)
           	/**
           	 $http.post('api/appointments').then(
               		 function(response) {
               			
               			$scope.datos=response.data;
               			$scope.datos.fecha_inicio=moment($scope.datos.fecha_inicio).toDate()
               		 }
               );
            })**/
        	
       
        	 
             
             

         })
        	
        }
    });