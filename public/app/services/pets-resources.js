'use strict';

angular.module('petsResources', []).factory('petsResources', function($resource, $q){	
	return $resource('/api/pets/:id', {id:'@id'}, {
		update: { method:'PUT'},
		getbyowner:{method:'GET',
					params:{owner:'@owner'},
					isArray: true,
					url: '/api/pet/:owner'}
	})
	
});