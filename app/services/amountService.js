'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp').service('amountService', function() {


    var amounts = [{
        id: 1,
        amDate: "06/06/2016",
        amProd: "Food",
        amTax: "0-50,000 ",
        amDis: "3%",
        amTol: 40000

    }, {
        id: 2,
        amDate: "07/06/2016",
        amProd: "Drink",
        amTax: "0-50,000 ",
        amDis: "5%",
        amTol: 50000
    }, {
        id: 3,
        amDate: "08/06/2016",
        amProd: "Dessert",
        amTax: "0-50,000 ",
        amDis: "7%",
        amTol: 60000
    }, {
        id: 4,
        amDate: "09/06/2016",
        amProd: "Combo Set",
        amTax: "0-50,000 ",
        amDis: "10%",
        amTol: 70000
    }];

    this.getAmountList = function() {
        return amounts;
    };

    this.getAmount = function(arr, id) {
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

    this.deleteAmount = function(id) {
        for (var i = 0; i < amounts.length; i++) {
            if (amounts[i].id == id) {
                amounts.splice(i, 1);
                break;
            }
        }
        return amounts;
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
