	(function() {
	 
	 var CustomerController = function($scope,$http){
	 		$http.get('assets/data/customers.json')
	 		.then(function(response){
	 			$scope.customers = response.data.customers;
	 		});
		 	
			$scope.sortBy = 'name';
			$scope.reverse = false;
			$scope.doSort = function(propName){
				$scope.sortBy = propName;
				$scope.reverse = !$scope.reverse;
			};
		};

		/* Inject variables for minifying so AngularJs still works.*/
		CustomerController.$inject = ['$scope', '$http'];
		angular.module('customerApp')
			.controller('CustomerController', CustomerController);
	}());