(function(){
'use strict';

// TODO Doco

var app = angular.module('AGL', ['ngRoute', 'appControllers', 'homePageControllers', 'formControllers']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl : '/views/home.html',
            controller  : 'homePageController',
        })
		.when('/createAnAccount', {
			templateUrl : '/views/forms/createAnAccount.html',
			controller  : 'formController',
		})
        .otherwise({
            redirectTo  : '/',
        });

    $locationProvider.html5Mode(true);

}]);

})();
