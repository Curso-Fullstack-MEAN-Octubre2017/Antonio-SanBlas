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
             .when("/petNew/:id",{
                template: "<pet-new-module></pet-new-module>"
            })
            .when("/pet/:id",{
                template: "<pet-new-module></pet-new-module>"
            })
            .when("/appointments/:month",{
                template: "<appointment-module></appointment-module>"
            })
           
            .otherwise({
                template: "Other"
            });
    });