'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp')
    .controller('reportCtrl', function($scope, amountService, flightService, includedService, $filter, $routeParams) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.amounts = [];
        $scope.isEdit = $routeParams.amountID ? true : false;
        $scope.newAmount = {};
        $scope.initAmount = function() {
            $scope.amounts = amountService.getAmountList();
        }

        $scope.newFnAmount = function() {
            $scope.newAmount = {};
        };

        $scope.addAmount = function() {
            $scope.newAmount.id = guid();
            $scope.amounts.push($scope.newAmount);
            $scope.newFnAmount();
        };

        $scope.deleteAmount = function(id) {
            amountService.deleteAmount(id);
        };


        $scope.setValAmount = function() {
            // alert('');
            // var result = $filter("filter")($scope.carts, { id: $routeParams.cardID });
            var result = amountService.getAmount($scope.amounts, $routeParams.amountID);
            console.log(result);
            if (result) {
                $scope.newAmount = result;
            }

        };

        $scope.editFnAmount = function() {
            //
        };
        $scope.initAmount();

        if ($routeParams.amountID) {
            $scope.setValAmount();
        } else {
            $scope.newFnAmount();
        }


        // $scope.calculateType = "ByBill";
        // $scope.changeCalType = function(type) {
        //     $scope.calculateType = type;
        //     console.log(type);
        // };

        $scope.flights = [];
        $scope.isEdit = $routeParams.flightID ? true : false;
        $scope.newFlight = {};
        $scope.initFlight = function() {
            $scope.flights = flightService.getFlightList();
        }

        $scope.newFnFlight = function() {
            $scope.newFlight = {};
        };

        $scope.addFlight = function() {
            $scope.newFlight.id = guid();
            $scope.flights.push($scope.newFlight);
            $scope.newFnFlight();
        };

        $scope.deleteFlight = function(id) {
            flightService.deleteFlight(id);
        };


        $scope.setValFlight = function() {
            // alert('');
            // var result = $filter("filter")($scope.carts, { id: $routeParams.cardID });
            var result = flightService.getFlight($scope.flights, $routeParams.flightID);
            console.log(result);
            if (result) {
                $scope.newFlight = result;
            }

        };

        $scope.editFnFlight = function() {
            //
        };
        $scope.initFlight();

        if ($routeParams.flightID) {
            $scope.setValFlight();
        } else {
            $scope.newFnFlight();
        }
//////////////////////////////////
        $scope.includes = [];
        $scope.isEdit = $routeParams.includeID ? true : false;
        $scope.newInclude = {};
        $scope.initInclunde = function() {
            $scope.includes = includedService.getInclundeList();
        }

        $scope.newFnInclude = function() {
            $scope.newInclude  = {};
        };

        $scope.addInclunde = function() {
            $scope.newInclude .id = guid();
            $scope.includes.push($scope.newInclude );
            $scope.newFnInclude();
        };

        $scope.deleteInclunde = function(id) {
            includedService.deleteInclunde(id);
        };


        $scope.setValInclude = function() {
            // alert('');
            // var result = $filter("filter")($scope.carts, { id: $routeParams.cardID });
            var result = includedService.getInclunde($scope.includes, $routeParams.includeID);
            console.log(result);
            if (result) {
                $scope.newInclude  = result;
            }

        };

        $scope.editFnInclude = function() {
            //
        };
        $scope.initInclunde();

        if ($routeParams.includeID) {
            $scope.setValInclude();
        } else {
            $scope.newFnInclude();
        }

    });
