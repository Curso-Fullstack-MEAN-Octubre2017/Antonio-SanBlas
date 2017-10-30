'use strict';

angular.module('petStore')
    .config(function(
        $locationProvider,
        $routeProvider
    ){
        $locationProvider.html5Mode({ enabled: true });
        $routeProvider
	        .when("/",{
	            template: ""
	        })
            .when("/customers",{
                template: "<customer-module></customer-module>"
            })
            .when("/customer",{
                template: "<customer-new-module></customer-new-module>"
            })
            .when("/customer/:id",{
                template: "<customer-new-module></customer-new-module>"
            })
            .when("/customerDel/:id",{
                template: "<customer-module></customer-module>"
            })
            .when("/pet/:id",{
                template: "<pet-new-module></pet-new-module>"
            })
            .when("/appointments/:from/:to",{
                template: "<appointment-module></appointment-module>"
            })
            .when("/appointmentsList/:date",{
                template: "<appointments-module></appointments-module>"
            })
            .when("/appointmentsDetail/:id",{
                template: "<appointment-detail-module></appointment-detail-module>"
            })
            .when("/appointments",{
                template: "<appointments-module></appointments-module>"
            })
            .otherwise({
                template: "Other"
            });
    });