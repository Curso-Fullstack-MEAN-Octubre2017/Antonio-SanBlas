'use strict';

angular.module('customersResources', []).factory('customersResources', function($resource, $q){	
	return $resource('/api/customers/:id', {id:'@id'}, {
		update: { method:'PUT'}   
	})
	
});