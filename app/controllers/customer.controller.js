	(function() {

	    var CustomerController = function($scope, $log,CustomerFactory, AppSettings) {
	   


	        $scope.sortBy = 'name';
	        $scope.reverse = false;
	        $scope.customers = [];
	        $scope.AppSettings = AppSettings;
	        function init(){
	        	CustomerFactory.getCustomers()
	        			.success(function(customers){
	        				$scope.customers = customers;
	        			})
	        			.error(function(data,status,headers,config){
	        				//handle error
	        				$log.log(data.error + ' ' + status);
	        			});
	        }

	        init();

	        $scope.doSort = function(propName) {
	            $scope.sortBy = propName;
	            $scope.reverse = !$scope.reverse;
	        };

	        $scope.deleteCustomer = function(customerId){
	        	CustomerFactory.deleteCustomer(customerId)
	        	.success(function(status) {
	        		if(status){
	        			for(var i=0,len=$scope.customers.length;i<len;i++){
	        				if($scope.customers[i].id === customerId){
	        					$scope.customers.splice(i,1);
	        					break;
	        				}
	        			}
	        		} else {
	        			$window.alert('Unable to delete customer');
	        		}
	        	})
	        	.error(function(data,status,headers,config){
	        		$log.log(data.error + " " + status);
	        	});
	        }
	       
	    };

	    /* Inject variables for minifying so AngularJs still works.*/
	    CustomerController.$inject = ['$scope','$log', 'CustomerFactory','AppSettings'];
	    angular.module('customerApp')
	        .controller('CustomerController', CustomerController);
	}());
