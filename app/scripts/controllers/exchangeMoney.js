'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp')
    .controller('exchangeMoneyCtrl', function($scope, exchangeMoneyService, $filter, $routeParams) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.exchangesData = [];
        $scope.exchangesResult = [];
        $scope.timeDaily = [];
        $scope.searchDate = "06/06/2016";
        var _exchangesData = [];

        $scope.exchanges = [];
        $scope.isEdit = $routeParams.exchangeID ? true : false;
        $scope.newExchange = {};
        $scope.init = function() {
            $scope.exchanges = exchangeMoneyService.getExchangeList();

            exchangeMoneyService.getExchangeDataList(function(response){
                _exchangesData = response;
                $scope.exchangesData = $filter('filter')(response, {date:$('#searchDate').val()});
                $scope.timeDaily = $scope.exchangesData[0].times;
            });
        }
        $scope.onChangeDate = function(){
            $scope.exchangesData = $filter('filter')(_exchangesData, {date:$('#searchDate').val()});
            $scope.timeDaily = $scope.exchangesData[0].times;
        };

        $scope.onChangeTime = function(){
            $scope.exchangesResult = $filter('filter')($scope.exchangesData[0].times, {id:$scope.selectTimeId});
        };

        $scope.newFn = function() {
            $scope.newExchange = {};
        };

        $scope.addExchange = function() {
            $scope.newExchange.id = guid();
            $scope.exchanges.push($scope.newExchange);
            $scope.newFn();
        };

        $scope.deleteExchange = function(id){
            exchangeMoneyService.deleteExchange(id);
        };


        $scope.setVal = function() {
            // alert('');
            // var result = $filter("filter")($scope.carts, { id: $routeParams.cardID });
            var result = exchangeMoneyService.getExchange($scope.exchanges, $routeParams.exchangeID);
            console.log(result);
            if (result) {
                $scope.newExchange = result;
            }

        };

        $scope.editFn = function() {
            //
        };
        $scope.init();

        if ($routeParams.exchangeID) {
            $scope.setVal();
        } else {
            $scope.newFn();
        }

        $scope.addRowEx = function() {
            $scope.exchanges.push({});
            console.log($scope.exchanges);
            // alert("");
        };



    });
