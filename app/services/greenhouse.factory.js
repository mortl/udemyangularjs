	(function() {
	 'use strict';
		 var GreenhouseFactory = function($http){

		 	var factory = {};


		 	factory.getOffices = function(){
		 		return $http.get('https://api.greenhouse.io/v1/boards/indexexchange/offices');
		 	}
		 }

	}());