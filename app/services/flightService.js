'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp').service('flightService', function() {


    var flights = [{
        id: 1,
        fliDate: "06/06/2016",
        fliFlight: "AK01",
        fliCart: "cart 001A",
        fliProd: "Food",
        fliTax: "0-50,000 ",
        fliDis: "3%",
        fliTol: 40000

    }, {
        id: 2,
        fliDate: "07/06/2016",
        fliFlight: "AK01",
        fliCart: "cart 001A",
        fliProd: "Drink",
        fliTax: "0-50,000 ",
        fliDis: "5%",
        fliTol: 50000
    }, {
        id: 3,
        fliDate: "08/06/2016",
        fliFlight: "AK01",
        fliCart: "cart 001A",
        fliProd: "Dessert",
        fliTax: "0-50,000 ",
        fliDis: "7%",
        fliTol: 60000
    }, {
        id: 4,
        fliDate: "09/06/2016",
        fliFlight: "AK01",
        fliCart: "cart 001A",
        fliProd: "Combo Set",
        fliTax: "0-50,000 ",
        fliDis: "10%",
        fliTol: 70000
    }];

    this.getFlightList = function() {
        return flights;
    };

    this.getFlight = function(arr, id) {
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

    this.deleteFlight = function(id) {
        for (var i = 0; i < flights.length; i++) {
            if (flights[i].id == id) {
                flights.splice(i, 1);
                break;
            }
        }
        return flights;
    };

    //     var calculates1 = [{
    //     id: 1,
    //     Type:"Food",
    //     Product:"kolomee",
    //     calDesc: "0-50,000 ",
    //     calMin: 0,
    //     calMax: 50000 ,
    //     calComm: 5
    // }, {
    //     id: 2,
    //     calDesc: "50,001-100,000 ",
    //     calMin: 50001,
    //     calMax: 100000 ,
    //     calComm: 7
    // }, {
    //     id: 3,
    //     calDesc: "100,001-150,000 ",
    //     calMin: 100001,
    //     calMax: 150000 ,
    //     calComm: 10
    // }, {
    //     id: 4,
    //     calDesc: "150,001 ",
    //     calMin: 150001,
    //     calMax: 0 ,
    //     calComm: 15
    // }];
});
