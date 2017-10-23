'use strict';

angular.module('appointmentModule')
    .component('appointmentModule', {
        templateUrl:'/app/appointment-module/appointment-module.html',
        controller: function($scope, $http,$routeParams,$location) {
        	
        	 
             moment.locale("es");
             
             var currentMonth = moment().startOf('month');

             if($routeParams.month) {
             	currentMonth = moment($routeParams.month, "YYYYMM"); 
             }
             $scope.currentMonth = currentMonth.toDate();
             $scope.prevMonth = moment(currentMonth).add(-1,'M').toDate();
             $scope.nextMonth = moment(currentMonth).add(1,'M').toDate();

             $scope.cells = []

             var firstWeekDay = currentMonth.weekday();
             for(var i = 0; i < firstWeekDay; i++) {
             	$scope.cells.push({date: "---"});
             }
             
             
             var nextM= moment(currentMonth).add(1,'M').toDate();
             var currentM= moment(currentMonth).toDate();
             nextM=moment(nextM).format('YYYYMM')
             currentM=moment(currentM).format('YYYYMM')
             
            
             $http.get("/api/appointments/"+currentM+'/'+nextM).then(function(response){
             	$scope.appointmentDate = response.data;
             	//console.log($scope.appointmentDate);
                 for (var m = moment(currentMonth); m.isBefore($scope.nextMonth); m.add(1, 'days')) {
                 	var currentDate = m.format('YYYY-MM-DD');
                 	$scope.cells.push({
                 		date: currentDate, 
                 		appointments: $scope.appointmentDate[currentDate],
                 		appointmentsCount: $scope.appointmentDate[currentDate] ? Object.keys($scope.appointmentDate[currentDate]).length : 0
                 	});
                 	
             	}
             });
        	
        }
    });