(function(){
'use strict';

// TODO Doco

var appController = angular.module('appControllers', ['ui.bootstrap', 'loginControllers', 'siteNavigationService']);

appController.controller('appController', ['$scope', '$uibModal', 'siteNavigation',
    function($scope, $uibModal, siteNavigation) {

// Navigation

		$scope.goHome = function () {
			siteNavigation.loadHomePage();
		};

// Login Modal

		$scope.openLoginModal = function () {

			var modalInstance = $uibModal.open({
				templateUrl : '/partials/modals/login.html',
				controller  : 'loginController',
				size        : 'sm'
			});

			modalInstance.result.then(function ModalFinished (action) {
				console.log('close login modal. Action: ' + action);
			}, function ModalClosed () {
				console.log('dismiss login modal');
			});

		};


    }]);


})();
