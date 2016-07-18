var app = angular.module('myApp',['angular.filter']);


/*
Scope based controller
 */

app.controller('CustomerController', function($scope){
			$scope.customers = customers;
			$scope.sortBy = 'name';
			$scope.reverse = false;
			$scope.doSort = function(propName){
				$scope.sortBy = propName;
				$scope.reverse = !$scope.reverse;
			};

});

// No Scope Injected. Either work fine.
/*app.controller('CustomerController', function(){
			this.customers = customers;
			this.sortBy = 'name';
			this.reverse = false;
			$this.doSort = function(propName){
				this.sortBy = propName;
				this.reverse = !this.reverse;
			};

});*/


app.controller('JobController',function($http){
	$http.get("https://api.greenhouse.io/v1/boards/indexexchange/offices");
});


var customers = [{

	joined:'2000-12-03',
	name:'John',
	city:'Toronto',
	orderTotal: 9.454
},{

	joined:'1988-02-04',
	name:'Steve',
	city:'Los Angeles',
	orderTotal: 22.454
},
{

	joined:'1965-09-12',
	name:'Bob',
	city:'New York',
	orderTotal: 39.454
},
{

	joined:'1990-07-22',
	name:'Alyssa',
	city:'London',
	orderTotal: 31.23321
}];