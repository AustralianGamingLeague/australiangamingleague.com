(function(){
'use strict';

// XXX This entire module is messy and should only be used for testing. Do not duplicate elsewhere.

var apiTesterController = angular.module('apiTesterController', ['ngResource']);

apiTesterController.controller('apiTesterController', ['$scope', '$resource',
    function($scope, $resource) {

        var User = $resource('/api/users', {}, {
            NewUser : { method : 'POST',
                        params : {
                            public_id   : '@public_id',
                            username    : '@username',
                            password    : '@password',
                            email       : '@email',
                        },
                        isArray : false
            },
        });

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

            console.log("Adding param field:");
            console.log($scope.params);
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
            User.NewUser(
                {
                    public_id   : 'JD7EN3JE',
                    username    : 'Bob',
                    password    : 'lwjn38hnbe35bve6',
                    email       : 'bobs-news@gmail.com',
                },
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
