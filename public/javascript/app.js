(function(){
'use strict';

var app = angular.module('AGL', ['ngRoute', 'appControllers', 'homePageControllers']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl : '/views/home.html',
            controller  : 'homePageController',
        })
        .otherwise({
            redirectTo  : '/',
        });

    $locationProvider.html5Mode(true);

}]);

})();
