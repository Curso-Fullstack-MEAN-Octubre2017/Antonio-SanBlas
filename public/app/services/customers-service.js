/**'use strict';

angular.module('customersService', []).factory('customersService', function($http, $q){
    
	var service = {};
	
	service.getCustomers = () => {
		var d = $q.defer();
    	$http.get("/api/appointments")
    		.success( function(response) {
    			d.resolve(response);
	    	})
	    	.error(function(err) {
				d.reject(err)
			});
    	return d.promise;
	}
	
	/*
	return $resource('/api/customers', {
        update: { method:'GET'}
    })	
});**/