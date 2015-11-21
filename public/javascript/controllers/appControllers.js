(function(){
'use strict';

var appController = angular.module('appControllers', ['ui.bootstrap', 'loginControllers']);

appController.controller('appController', ['$scope', '$uibModal',
    function($scope, $uibModal) {

		$scope.openLoginModal = function () {

			var modalInstance = $uibModal.open({
				templateUrl : '/partials/modals/login.html',
				controller  : 'loginController'
			});

			modalInstance.result.then(function ModalFinished () {
				console.log('close login modal'); // Will be called from $uibModalInstance.close() in modal controller
			}, function ModalClosed () {
				console.log('dismiss login modal'); // can be manually called from $uibModalInstance.dismiss in modal controller
			});

		};

    }]);


})();
