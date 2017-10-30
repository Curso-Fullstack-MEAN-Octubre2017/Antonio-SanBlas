'use strict';
angular.module('appointmentListModule', []);
angular.module('appointmentListModule')
    .component('appointmentListModule', {
        templateUrl:'/app/appointments-module/appointment-list-module/appointment-list-module.html',
        controller: function($scope, $http,$routeParams,$location) {
        	console.log('entro')
        	 moment.locale("es");
             var date = $routeParams.date;
             var currentday = moment(date, 'YYYYMMDD');
             var nextday = moment(currentday).add(1, 'day').format('YYYYMMDD');
             $scope.appointment = [];
             $scope.currentday=currentday;
             console.log($scope);
             $http.get('api/appointments/' + date + '/' + nextday).then(
            		 function(response) {
            			 var res = response.data;
                         var start = moment(currentday).set({hour:9})
                         var final = moment(currentday).set({hour:21})
                                 
                         while(start < final){
                                     
                        	 $scope.appointment.push({            	
                        		 hora : start.format('HH:mm'),
                        		 datos: res[currentday.format('YYYY-MM-DD')][start.format('HH:mm')]
					         })                    
                             start = moment(start).add(0.5,'hour');
                         }

            		 });

         }
        	
        });