(function(){
'use strict';

// XXX This entire module is messy and should only be used for testing. Do not duplicate elsewhere.

var apiTesterController = angular.module('apiTesterController', ['ngResource']);

apiTesterController.controller('apiTesterController', ['$scope', '$resource',
    function($scope, $resource) {

        $scope.httpMethods = ['GET', 'POST', 'PUT', 'DELETE'];
        $scope.selectedMethod = $scope.httpMethods[0];

        $scope.apiString = "";

        $scope.params = [];

        $scope.AddParam = function() {
            $scope.params.push({
                id      : $scope.params.length,
                name    : '',
                value   : '',
            });
        };

        $scope.RemoveParam = function(id) {
            $scope.params.splice(id, 1);
            UpdateParamIds();
        };

        function UpdateParamIds() {
            for (var i = 0; i < $scope.params.length; i++) {
                $scope.params[i].id = i;
            }
        }

        function handleError(response) {
            console.log('API ERROR');
            console.log(response);
        }

        $scope.Submit = function() {
            var paramsObject = {};
            for (var i = 0; i < $scope.params.length; i++) {
                var param = $scope.params[i];
                paramsObject[param.name] = param.value;
            }

            var User = $resource($scope.apiString, {}, {
                NewUser : { method : $scope.selectedMethod,
                            isArray : false
                },
            });

            User.NewUser(
                paramsObject,
                function APIResponse(response) {
                    console.log('Response from API!');
                    console.log(response);
                    $scope.response = response;
                },
                handleError
            );
        };


    }]);


})();
