'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp').service('exchangeMoneyService', function() {

    
    var exchanges = [{
        id: 1,
        exchangeName: "USD",
        exchangeDesc: "USD50-100",
        buyingRate: 35.99,
        sellingRate: 35.87
    }, {
        id: 2,
        exchangeName: "GBP",
        exchangeDesc: "United Kingdom",
        buyingRate: 52.58,
        sellingRate: 52.08
    }, {
        id: 3,
        exchangeName: "EUR",
        exchangeDesc: "Euro Zone",
        buyingRate: 40.35,
        sellingRate: 40.05
    }, {
        id: 4,
        exchangeName: "JYP",
        exchangeDesc: "Japan",
        buyingRate: 33.11,
        sellingRate: 32.65
    }, {
        id: 5,
        exchangeName: "HKD",
        exchangeDesc: "Hong Kong",
        buyingRate: 4.69,
        sellingRate: 4.62
    }, {
        id: 6,
        exchangeName: "AUD",
        exchangeDesc: "Australia",
        buyingRate: 26.63,
        sellingRate: 26.33
    
    }];

    this.getExchangeList = function() {
        return exchanges;
    };

    this.getExchange = function(arr, id) {
        if (arr) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].id == id) {
                    return arr[i];
                }
            }
            return [];
        }
        return [];

    };

    this.deleteExchange = function(id) {
            for (var i = 0; i < exchanges.length; i++) {
                if (exchanges[i].id == id) {
                    exchanges.splice(i, 1);
                    break;
                }
            }
            return exchanges;
        };
});
