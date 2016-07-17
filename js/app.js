var app = angular.module('myApp',['angular.filter']);




app.controller('CustomerController', function(){
			this.customers = customers;

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
}]