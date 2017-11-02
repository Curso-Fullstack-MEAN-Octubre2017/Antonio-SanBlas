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
).directive('customButton',
	    function () {
		    return {
		        restrict: 'E',
		        replace: true,
		        scope: {
		            size: '@',
		            color: '@',
		            content:'@'
		        },
		        template: '<div>' +
		        '<button class="waves-effect waves-light btn btn-{{size}} {{color}}">' +
		        '{{content}}</button>' +
		        '</div>'
		    }
}).directive('btnLink',
	    function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            styles: '@',
            content:'@',
            href:'@'
        },
        template: '<a class="{{styles}}" href="{{href}}" >{{content}}</a>' 
    }
})
			
		