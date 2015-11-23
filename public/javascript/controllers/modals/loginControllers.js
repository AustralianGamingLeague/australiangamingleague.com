(function(){
'use strict';

// TODO Doco

var loginController = angular.module('loginControllers', ['siteNavigationService']);

loginController.controller('loginController', ['$scope', '$uibModalInstance', 'siteNavigation',
	function ($scope, $uibModalInstance, siteNavigation) {

		$scope.loginDetails = {
			login    : undefined,
			password : undefined
		};

		$scope.login = function () {
			// TODO add login logic here
			$uibModalInstance.close('login');
		};

		$scope.cancel = function () {
			$uibModalInstance.dismiss();
		};

		$scope.createAnAccount = function () {
			siteNavigation.loadCreateAnAccountForm();
			$uibModalInstance.dismiss();
		};

		$scope.forgotPassword = function () {
			// TODO
		};

		$scope.loginFacbook = function () {
			// TODO
		};

	}]);

})();
