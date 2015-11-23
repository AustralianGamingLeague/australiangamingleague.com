(function(){
'use strict';

// TODO Doco

var siteNavigationService = angular.module('siteNavigationService', []);

siteNavigationService.factory('siteNavigation', ['$location', function ($location) {
	return {

		loadHomePage : function () {
			$location.path('/');
		},

		loadCreateAnAccountForm : function () {
			$location.path('/createAnAccount');
		},
	};
}]);

})();
