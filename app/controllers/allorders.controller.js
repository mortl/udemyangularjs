	(function() {
	 
	 var AllOrdersController = function($scope,$log, CustomerFactory){
	 	$scope.orders = null;
	 	$scope.ordersTotal = 0.0;
	 	$scope.totalType;




	 	function init(){
	 		CustomerFactory.getOrders()
	 				.success(function(orders){
	 					$scope.orders = orders;
	 					getOrdersTotal();
	 				})
	 				.error(function(data,status,headers,config){
	 					$log.log(data.error + " " + status);
	 				});
	 	}

	 	function getOrdersTotal(){
	 		var total = 0;

	 		for(var i = 0, len= $scope.orders.length; i < len; i++){
	 			total += $scope.orders[i].total;
	 		}
	 		$scope.ordersTotal = total;
	 		$scope.totalType = ($scope.ordersTotal > 100) ? 'success' : 'danger';
	 	}

	 	init();
	 };
		 AllOrdersController.$inject = ['$scope','$log', 'CustomerFactory'];
		 angular.module('customerApp')
		 		.controller('AllOrdersController', AllOrdersController);

	}());	 
