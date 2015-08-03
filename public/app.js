(function(){
"use strict";

var app = angular.module('AGL', ['ngRoute', 'appController', 'homePageController', 'apiTesterController']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl : '/views/home.html',
            controller  : 'homePageController',
        })
        .when('/api-tester', {
            templateUrl : '/views/apiTester.html',
            controller  : 'apiTesterController',
        })
        .otherwise({
            redirectTo  : '/',
        });

    $locationProvider.html5Mode(true);

}]);

})();
