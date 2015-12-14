angular.module('App', ['ngRoute']);


angular.module('App')
	.config(['$routeProvider', function($routeProvider){
		// No need to define #, it is assumed
		$routeProvider
			.when('/', {
				templateUrl : '/html/index.html',
				controller : 'mainController'
			})
			.when('/services', {
				templateUrl : '/html/services.html',
				controller : 'mainController'
			})
			.when('/gallery', {
				templateUrl : '/html/gallery.html',
				controller : 'mainController'
			})
			.when('/testimonials', {
				templateUrl : '/html/testimonials.html',
				controller : 'mainController'
			})
			.when('/contact', {
				templateUrl : '/html/contact.html',
				controller : 'mainController'
			})

	}])




angular.module('App')
	.controller('mainController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	
	$scope.company = "Hill Country Mobile";	

	$scope.mechanic = true; 
	$scope.viewMechanic = function() {
		$scope.rates = false;
		$scope.mechanic = true;
	}
	$scope.viewRates = function() {
		$scope.rates = true;
		$scope.mechanic = false;
	}

}])




