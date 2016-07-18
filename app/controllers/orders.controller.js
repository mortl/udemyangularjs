	(function() {
	 
	 var OrdersController = function ($scope,$log, $routeParams,CustomerFactory){

	 	var customerId = $routeParams.customerId;

	 	$scope.customer = null;

	 	function init(){
	      CustomerFactory.getCustomer(customerId)
                        .success(function(customer){
                            $scope.customer = customer;
                        })
                        .error(function(data,status,headers,config){
                            //handle error
                            $log.log(data.error + ' ' + status);
                        });
	 	}

	 
	 	   

	 	  init();
	 };
		 
	 OrdersController.$inject = ['$scope','$log','$routeParams','CustomerFactory'];
	 angular.module('customerApp')
	 	.controller('OrdersController',OrdersController);
	}());	 
