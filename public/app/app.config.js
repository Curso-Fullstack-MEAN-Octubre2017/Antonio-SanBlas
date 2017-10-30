'use strict';

angular.module('petStore')
    .config(function(
        $locationProvider,
        $routeProvider
    ){
        $locationProvider.html5Mode({ enabled: true });
        $routeProvider
	        .when("/",{
	            template: "Ver lista de clientes <br/> <a ng-href='customers'>Listar Clientes</a> <br/>" +
	            		"Ver lista de citas <br/><a ng-href='appointments/201710/201710'>Listar Citas</a> <br/><br/> "
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
                template: "<appointment-list-module></appointment-list-module>"
            })
            .when("/appointmentsDetail/:id",{
                template: "<appointment-detail-module></appointment-detail-module>"
            })
           
            .otherwise({
                template: "Other"
            });
    });