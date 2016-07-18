	(function() {
	 
	 var OrdersController = function ($scope, $routeParams,CustomerFactory){

	 	var customerId = $routeParams.customerId;

	 	$scope.customer = null;

	 	function init(){
	 		$scope.customer = CustomerFactory.getCustomer(customerId);
	 	}

	 	 //AJAX Call to get Json data. Needs a fix.
	 	/*$http.get('assets/data/customers-with-id.json')
	 	  .then(function(response){
	 	  	$scope.customers = response.data.customers;
	 	  });*/
	 	  
	 	   

	 	  init();
	 };
		 
	 OrdersController.$inject = ['$scope','$routeParams','CustomerFactory'];
	 angular.module('customerApp')
	 	.controller('OrdersController',OrdersController);
	}());	 
