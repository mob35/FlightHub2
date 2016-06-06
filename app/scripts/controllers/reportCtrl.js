'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp')
    .controller('reportCtrl', function($scope, amountService,flightService, $filter, $routeParams) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.amounts = [];
        $scope.isEdit = $routeParams.amountID ? true : false;
        $scope.newAmount = {};
        $scope.init = function() {
            $scope.amounts = amountService.getAmountList();
        }

        $scope.newFn = function() {
            $scope.newAmount = {};
        };

        $scope.addAmount = function() {
            $scope.newAmount.id = guid();
            $scope.amounts.push($scope.newAmount);
            $scope.newFn();
        };

        $scope.deleteAmount = function(id) {
            amountService.deleteAmount(id);
        };


        $scope.setVal = function() {
            // alert('');
            // var result = $filter("filter")($scope.carts, { id: $routeParams.cardID });
            var result = amountService.getAmount($scope.amounts, $routeParams.amountID);
            console.log(result);
            if (result) {
                $scope.newAmount = result;
            }

        };

        $scope.editFn = function() {
            //
        };
        $scope.init();

        if ($routeParams.amountID) {
            $scope.setVal();
        } else {
            $scope.newFn();
        }


        // $scope.calculateType = "ByBill";
        // $scope.changeCalType = function(type) {
        //     $scope.calculateType = type;
        //     console.log(type);
        // };

        $scope.flights = [];
        $scope.isEdit = $routeParams.flightID ? true : false;
        $scope.newFlight = {};
        $scope.init = function() {
            $scope.flights = flightService.getFlightList();
        }

        $scope.newFn = function() {
            $scope.newFlight = {};
        };

        $scope.addFlight = function() {
            $scope.newFlight.id = guid();
            $scope.flights.push($scope.newFlight);
            $scope.newFn();
        };

        $scope.deleteFlight = function(id) {
            flightService.deleteFlight(id);
        };


        $scope.setVal = function() {
            // alert('');
            // var result = $filter("filter")($scope.carts, { id: $routeParams.cardID });
            var result = flightService.getFlight($scope.flights, $routeParams.flightID);
            console.log(result);
            if (result) {
                $scope.newFlight = result;
            }

        };

        $scope.editFn = function() {
            //
        };
        $scope.init();

        if ($routeParams.amountID) {
            $scope.setVal();
        } else {
            $scope.newFn();
        }



    });
