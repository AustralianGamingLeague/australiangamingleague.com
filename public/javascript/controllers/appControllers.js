(function(){
'use strict';

// TODO Doco

var appController = angular.module('appControllers', ['ui.bootstrap', 'loginControllers']);

appController.controller('appController', ['$scope', '$uibModal',
    function($scope, $uibModal) {

// Login Modal

		$scope.openLoginModal = function () {

			var modalInstance = $uibModal.open({
				templateUrl : '/partials/modals/login.html',
				controller  : 'loginController'
			});

			modalInstance.result.then(function ModalFinished (action) {
				console.log('close login modal. Action: ' + action);
			}, function ModalClosed () {
				console.log('dismiss login modal');
			});

		};


    }]);


})();
