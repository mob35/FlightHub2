'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp').service('includedService', function() {


    var includes = [{
        id: 1,
        incDate: "06/06/2016",
        incFlight: "AK01",
        incCart: "cart 001A",
        incProd: "Food",
        incTax: "0-50,000 ",
        incDis: "3%",
        incTol: 40000,
        incPrice: 100,
        incFree: 20,
        incOffer: 15,
        inctotal: 145

    }, {
        id: 2,
        incDate: "07/06/2016",
        incFlight: "AK01",
        incCart: "cart 001A",
        incProd: "Drink",
        incTax: "0-50,000 ",
        incDis: "5%",
        incTol: 50000,
        incPrice: 80,
        incFree: 20,
        incOffer: 45,
        inctotal: 145
    }, {
        id: 3,
        incDate: "08/06/2016",
        incFlight: "AK01",
        incCart: "cart 001A",
        incProd: "Dessert",
        incTax: "0-50,000 ",
        incDis: "7%",
        incTol: 60000,
        incPrice: 100,
        incFree: 10,
        incOffer: 15,
        inctotal: 125
    }, {
        id: 4,
        incDate: "09/06/2016",
        incFlight: "AK01",
        incCart: "cart 001A",
        incProd: "Combo Set",
        incTax: "0-50,000 ",
        incDis: "10%",
        incTol: 70000,
        incPrice: 100,
        incFree: 20,
        incOffer: 15,
        inctotal: 145
    }];

    this.getInclundeList = function() {
        return includes;
    };

    this.getInclunde = function(arr, id) {
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

    this.deleteInclunde= function(id) {
        for (var i = 0; i < includes.length; i++) {
            if (includes[i].id == id) {
                includes.splice(i, 1);
                break;
            }
        }
        return includes;
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
