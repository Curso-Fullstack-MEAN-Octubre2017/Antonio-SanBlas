angular.module('formCustomerDirective', [])
.directive('labelInputForm',
		function() {
			return {
				restrict :'E',
				replace :true,
				 scope: {
	                    model: '=',
	                    idfor: '@',
	                    type: '@',
	                    label: '@',
	                    size: '@'                  
	            },
				template :'<div class="col {{size}}"> \
							<label for="{{idfor}}">{{label}}</label>\
								<input type="{{type}}" ng-model="model" >\
						   </div>'
			}
		}
)
			
		