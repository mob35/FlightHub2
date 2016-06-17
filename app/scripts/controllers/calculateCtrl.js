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
            $scope.calculates2 = calculateService.getCalculateList2();
            $scope.calculates3 = calculateService.getCalculateList3();
            $scope.calculates4 = calculateService.getCalculateList4();
            $scope.calculates5 = calculateService.getCalculateList5();
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
        $scope.TproductType = "Food";
        $scope.TableType = function(type) {
            $scope.TproductType = type;
        };
        $scope.addRowTable = function() {
            $scope.calculates.push({});
        };
        $scope.addRowTable2 = function() {
            $scope.calculates2.push({});
        };
        $scope.addRowTable3 = function() {
            $scope.calculates3.push({});
        };
        $scope.addRowTable4 = function() {
            $scope.calculates4.push({});
        };
        $scope.addRowTable5 = function() {
            $scope.calculates5.push({});
        };

    });
