(function(){
'use strict';

var createAnAccountController = angular.module('createAnAccountControllers', ['aglApiService']);

createAnAccountController.controller('createAnAccountController', ['$scope', 'aglApi',
	function ($scope, aglApi) {

		// Form Hints

		$scope.EMAIL_HINT = 'Enter your email address.';
		$scope.USERNAME_HINT = 'Enter a username. This will be used on learderboards and will be publicly visible on your profile.';
		$scope.PASSWORD_HINT = 'Enter a secure password/passphrase. There are no restrictions on passwords but please don\'t use password123.';
		$scope.PASSWORD_CONFIRM_HINT = 'Re-enter your password to make sure it\'s correct.';

		// User input

		$scope.formData = undefined;

		// Validation TODO This is business logic and should be moved to a service.

		$scope.validationErrors = undefined;

		var constraints = {
			email : {
				presence : true,
				email : {
					message : 'does not look like a valid email'
				},
				length : {
					minimum : 3,
					maximum : 50
				}
			},
			username : {
				presence : true,
				length : {
					minimum : 3,
					maximum : 25
				},
				format : {
					pattern : /\w+/i,
					message : 'must only contain letters, digits, and underscores.'
				}
			},
			password : {
				presence : true,
				length : {
					minimum : 3,
					maximum : 25
				}
			},
			passwordConfirmation : {
				presence : true,
				equality : {
					attribute : 'password',
					message : 'does not match password.',
					comparator : function (v1, v2) {
						return v1 === v2;
					}
				}
			}
		};

		// Submit Form

		$scope.createAccount = function () {
			$scope.validationErrors = validate($scope.formData, constraints);
			if (!$scope.validationErrors) {
				// TODO need to implement a 'return address' so that once the account has been created
				// you are returned to whatever page you were on. 
			}
		};

	}]);


})();
