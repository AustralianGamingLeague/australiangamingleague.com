(function(){
'use strict';

// TODO Doco

var siteNavigationService = angular.module('siteNavigationService', []);

siteNavigationService.factory('siteNavigation', ['$location', function ($location) {
	return {
		loadCreateAnAccountForm : function () {
			$location.path('/createAnAccount');
		},
	};
}]);

})();
