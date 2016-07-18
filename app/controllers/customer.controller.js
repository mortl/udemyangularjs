	(function() {

	    var CustomerController = function($scope, CustomerFactory) {
	      /*  $http.get('assets/data/customers-with-id.json')
	        .then(function(response){
	        	$scope.customers = response.data.customers;
	        });*/
	        //AJAX Call to get Json data. Needs a fix.


	        $scope.sortBy = 'name';
	        $scope.reverse = false;
	        $scope.customers = [];

	        function init(){
	        	$scope.customers = CustomerFactory.getCustomers();
	        }

	        init();

	        $scope.doSort = function(propName) {
	            $scope.sortBy = propName;
	            $scope.reverse = !$scope.reverse;
	        };
	       
	    };

	    /* Inject variables for minifying so AngularJs still works.*/
	    CustomerController.$inject = ['$scope', 'CustomerFactory'];
	    angular.module('customerApp')
	        .controller('CustomerController', CustomerController);
	}());
