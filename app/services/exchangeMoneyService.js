'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp').service('exchangeMoneyService', function() {

    var exchangesData = [{
        id: 1,
        date: "2016-06-06",
        times: [{
            id: 1,
            value: "09:00:AM",
            rates: [{
                id: 1,
                exchangeName: "USD",
                exchangeDesc: "USD50-100",
                thaiRate: 42.00,
                sellingRate: 35.87,
                img: "images/flag/us-flag.jpg"
            }, {
                id: 2,
                exchangeName: "GBP",
                exchangeDesc: "United Kingdom",
                thaiRate: 43.00,
                sellingRate: 52.08,
                img: "images/flag/euro.gif"
            }, {
                id: 3,
                exchangeName: "EUR",
                exchangeDesc: "Euro Zone",
                thaiRate: 42.00,
                sellingRate: 40.05,
                img: "images/flag/EU_Flag.jpg"
            }, {
                id: 4,
                exchangeName: "JYP",
                exchangeDesc: "Japan",
                thaiRate: 40.00,
                sellingRate: 32.65,
                img: "images/flag/Japanese_flag_print.jpg"
            }, {
                id: 5,
                exchangeName: "HKD",
                exchangeDesc: "Hong Kong",
                thaiRate: 45.00,
                sellingRate: 4.62,
                img: "images/flag/Hong_Kong.svg"
            }]
        },
        {
            id: 2,
            value: "11:00:AM",
            rates: [{
                id: 1,
                exchangeName: "USD",
                exchangeDesc: "USD50-100",
                thaiRate: 40.00,
                sellingRate: 35.87,
                img: "images/flag/us-flag.jpg"
            }, {
                id: 2,
                exchangeName: "GBP",
                exchangeDesc: "United Kingdom",
                thaiRate: 45.00,
                sellingRate: 52.08,
                img: "images/flag/euro.gif"
            }, {
                id: 3,
                exchangeName: "EUR",
                exchangeDesc: "Euro Zone",
                thaiRate: 42.00,
                sellingRate: 40.05,
                img: "images/flag/EU_Flag.jpg"
            }, {
                id: 4,
                exchangeName: "JYP",
                exchangeDesc: "Japan",
                thaiRate: 40.00,
                sellingRate: 32.65,
                img: "images/flag/Japanese_flag_print.jpg"
            }, {
                id: 5,
                exchangeName: "HKD",
                exchangeDesc: "Hong Kong",
                thaiRate: 45.00,
                sellingRate: 4.62,
                img: "images/flag/Hong_Kong.svg"
            }, {
                id: 6,
                exchangeName: "AUD",
                exchangeDesc: "Australia",
                thaiRate: 42.00,
                sellingRate: 26.33,
                img: "images/flag/Australia.svg.png"

            }]
        }]
    },
    {
        id: 2,
        date: "2016-06-16",
        times: [{
            id: 1,
            value: "08:00:AM",
            rates: [{
                id: 1,
                exchangeName: "USD",
                exchangeDesc: "USD50-100",
                thaiRate: 42.00,
                sellingRate: 35.87,
                img: "images/flag/us-flag.jpg"
            }, {
                id: 2,
                exchangeName: "GBP",
                exchangeDesc: "United Kingdom",
                thaiRate: 43.00,
                sellingRate: 52.08,
                img: "images/flag/euro.gif"
            }, {
                id: 3,
                exchangeName: "EUR",
                exchangeDesc: "Euro Zone",
                thaiRate: 42.00,
                sellingRate: 40.05,
                img: "images/flag/EU_Flag.jpg"
            }, {
                id: 4,
                exchangeName: "JYP",
                exchangeDesc: "Japan",
                thaiRate: 40.00,
                sellingRate: 32.65,
                img: "images/flag/Japanese_flag_print.jpg"
            }, {
                id: 5,
                exchangeName: "HKD",
                exchangeDesc: "Hong Kong",
                thaiRate: 45.00,
                sellingRate: 4.62,
                img: "images/flag/Hong_Kong.svg"
            }]
        },
        {
            id: 2,
            value: "10:00:AM",
            rates: [{
                id: 1,
                exchangeName: "USD",
                exchangeDesc: "USD50-100",
                thaiRate: 40.00,
                sellingRate: 35.87,
                img: "images/flag/us-flag.jpg"
            }, {
                id: 2,
                exchangeName: "GBP",
                exchangeDesc: "United Kingdom",
                thaiRate: 45.00,
                sellingRate: 52.08,
                img: "images/flag/euro.gif"
            }, {
                id: 3,
                exchangeName: "EUR",
                exchangeDesc: "Euro Zone",
                thaiRate: 42.00,
                sellingRate: 40.05,
                img: "images/flag/EU_Flag.jpg"
            }, {
                id: 4,
                exchangeName: "JYP",
                exchangeDesc: "Japan",
                thaiRate: 40.00,
                sellingRate: 32.65,
                img: "images/flag/Japanese_flag_print.jpg"
            }, {
                id: 5,
                exchangeName: "HKD",
                exchangeDesc: "Hong Kong",
                thaiRate: 45.00,
                sellingRate: 4.62,
                img: "images/flag/Hong_Kong.svg"
            }, {
                id: 6,
                exchangeName: "AUD",
                exchangeDesc: "Australia",
                thaiRate: 42.00,
                sellingRate: 26.33,
                img: "images/flag/Australia.svg.png"

            }]
        }]
    }];


    var exchanges = [{
        id: 1,
        exchangeName: "USD",
        exchangeDesc: "USD50-100",
        thaiRate: 40.00,
        sellingRate: 35.87,
        img: "images/flag/us-flag.jpg"
    }, {
        id: 2,
        exchangeName: "GBP",
        exchangeDesc: "United Kingdom",
        thaiRate: 45.00,
        sellingRate: 52.08,
        img: "images/flag/euro.gif"
    }, {
        id: 3,
        exchangeName: "EUR",
        exchangeDesc: "Euro Zone",
        thaiRate: 42.00,
        sellingRate: 40.05,
        img: "images/flag/EU_Flag.jpg"
    }, {
        id: 4,
        exchangeName: "JYP",
        exchangeDesc: "Japan",
        thaiRate: 40.00,
        sellingRate: 32.65,
        img: "images/flag/Japanese_flag_print.jpg"
    }, {
        id: 5,
        exchangeName: "HKD",
        exchangeDesc: "Hong Kong",
        thaiRate: 45.00,
        sellingRate: 4.62,
        img: "images/flag/Hong_Kong.svg"
    }, {
        id: 6,
        exchangeName: "AUD",
        exchangeDesc: "Australia",
        thaiRate: 42.00,
        sellingRate: 26.33,
        img: "images/flag/Australia.svg.png"

    }];

    this.getExchangeList = function() {
        //return exchanges;
        return exchangesData;
    };

     this.getExchangeOldList = function() {
        return exchanges;
        // return exchangesData;
    };

    this.getExchangeDataList = function(fnCallback) {
        //return exchanges;
        fnCallback(exchangesData);
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
