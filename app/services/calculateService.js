'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp').service('calculateService', function() {

    
    var calculates = [{
        id: 1,
        calType: "Food",
        calProd: "Kolomee",
        calDesc: "0-50,000 ",
        calDesc1:"30-80",
        calMin: 0,
        calMin1: 30,
        calMax: 50000 ,
        calMax1: 80 ,
        calComm: 5,
        calComm1: 3
    }, {
        id: 2,
        calType: "Fast Food",
        calProd: "Chicken Satay Wrap",
        calDesc: "50,001-100,000 ",
        calMin: 50001,
        calMax: 100000 ,
        calComm: 7,
        calDesc1:"20-80",
        calMin1: 20,
        calMax1: 80 ,
        calComm1: 6
    }, {
        id: 3,
        calType: "Combo Set",
        calProd: "Roti Canal with ChickenCurry",
        calDesc: "100,001-150,000 ",
        calMin: 100001,
        calMax: 150000 ,
        calComm: 10,
        calDesc1:"15-80",
        calMin1: 15,
        calMax1: 80 ,
        calComm1: 2
    }, {
        id: 4,
        calType: "Drink",
        calProd: "Pepsi",
        calDesc: "150,001 ",
        calMin: 150001,
        calMax: 0 ,
        calComm: 15,
        calDesc1:"25-80",
        calMin1: 25,
        calMax1: 80 ,
        calComm1: 8
    }];

    this.getCalculateList = function() {
        return calculates;
    };

    this.getCalculate = function(arr, id) {
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

    this.deleteCalculate = function(id) {
            for (var i = 0; i < calculates.length; i++) {
                if (calculates[i].id == id) {
                    calculates.splice(i, 1);
                    break;
                }
            }
            return calculates;
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
