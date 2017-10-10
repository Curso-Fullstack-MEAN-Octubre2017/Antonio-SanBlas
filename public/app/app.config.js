'use strict';

angular.module('petStore')
    .config(function(
        $locationProvider,
        $routeProvider
    ){
        $locationProvider.html5Mode({ enabled: true });
        $routeProvider
	        .when("/",{
	            template: "Ver lista de clientes <br/> <a ng-href='customers'>Listar Clientes</a>"
	        })
            .when("/customers",{
                template: "<customer-module></customer-module>"
            })
            .when("/customer",{
                template: ""
            })
            .otherwise({
                template: "Other"
            });
    });