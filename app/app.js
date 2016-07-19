	(function() {
	 
	 var app = angular.module('customerApp',['angular.filter','ngRoute','ngAnimate']);		 

	 app.config(function($routeProvider){
	 		$routeProvider
	 			.when('/', {
	 				controller:'CustomerController',
	 				templateUrl:'app/views/customers.html'
	 			})
	 			.when('/orders/:customerId', {
	 				controller:'OrdersController',
	 				templateUrl:'app/views/orders.html'
	 			})
	 			.when('/orders', {
	 				controller:'AllOrdersController',
	 				templateUrl:'app/views/allorders.html'
	 			})
	 			.otherwise( { redirectTo:'/' } );
	 });

	}());