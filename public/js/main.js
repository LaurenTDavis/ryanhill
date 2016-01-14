angular.module('App', ['ngRoute']);


angular.module('App')
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
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
			});

		// $locationProvider.html5Mode(true);

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

	$(document).on('click','.navbar-collapse.in',function(e) {
    	if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        	$(this).collapse('hide');
    	}
	});

	$(document).ready(function(){
    
    	$("[data-toggle=tooltip]").tooltip();
	});
	 


	$scope.task = {
        title       : '',
        description : '',
    }

    $scope.tasks = []
    $scope.submitTask = function(){
        console.log('submit a task!')
        $http({
            method : 'POST',
            url    : '/form-submit',
            data   : $scope.task
        }).then(function(returnData){
            console.log(returnData)
        }, function(error){
            console.log('error!', error)
        })
    }

    $scope.getTasks = function(){
        $http({
            method : 'GET',
            url    : '/tasks'
        }).then(function(returnData){
            $scope.tasks = returnData.data
        }, function(error){
            // console.log('error! ', error)
        })
    }

    setInterval($scope.getTasks, 1000)


    $scope.clear = function() {
    	console.log("Clear")
		document.getElementById("txtComment").value = "";
		document.getElementById("nameComment").value = "";

    }
}])





