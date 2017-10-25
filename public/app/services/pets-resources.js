'use strict';

angular.module('petsResources', []).factory('petsResources', function($resource, $q){	
	return $resource('/api/pets/:id', {id:'@id'}, {
		update: { method:'PUT'}
	})
	
});