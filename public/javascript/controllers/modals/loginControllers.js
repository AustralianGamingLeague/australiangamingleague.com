(function(){
'use strict';

var loginController = angular.module('loginControllers', []);

loginController.controller('loginController', ['$scope', '$uibModalInstance',
	function ($scope, $uibModalInstance) {

		$scope.loginDetails = {
			login    : undefined,
			password : undefined
		};

		$scope.login = function () {
			// TODO add login logic here
			$uibModalInstance.close();
		};

		$scope.cancel = function () {
			$uibModalInstance.dismiss();
		};

		$scope.createAnAccount = function () {
			// TODO redirect to new account form here.
		};

		$scope.forgotPassword = function () {
			// TODO
		};

		$scope.loginFacbook = function () {
			// TODO
		};

		$scope.loginTwitter = function () {
			// TODO
		};

		$scope.loginGoogle = function () {
			// TODO
		};

	}]);

})();
