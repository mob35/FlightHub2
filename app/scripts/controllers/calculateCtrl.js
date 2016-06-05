'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp')
    .controller('calculateCtrl', function($scope, calculateService, $filter, $routeParams) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];


        $scope.calculates = [];
        $scope.isEdit = $routeParams.calculateID ? true : false;
        $scope.newCalculate = {};
        $scope.init = function() {
            $scope.calculates = calculateService.getCalculateList();
        }

        $scope.newFn = function() {
            $scope.newCalculate = {};
        };

        $scope.addCalculate = function() {
            $scope.newCalculate.id = guid();
            $scope.calculates.push($scope.newCalculate);
            $scope.newFn();
        };

        $scope.deleteCalculate = function(id) {
            calculateService.deleteCalculate(id);
        };


        $scope.setVal = function() {
            // alert('');
            // var result = $filter("filter")($scope.carts, { id: $routeParams.cardID });
            var result = calculateService.getCalculate($scope.calculates, $routeParams.calculateID);
            console.log(result);
            if (result) {
                $scope.newCalculate = result;
            }

        };

        $scope.editFn = function() {
            //
        };
        $scope.init();

        if ($routeParams.calculateID) {
            $scope.setVal();
        } else {
            $scope.newFn();
        }


        $scope.calculateType = "ByBill";
        $scope.changeCalType = function(type) {
            $scope.calculateType = type;
            console.log(type);
        };


    });
