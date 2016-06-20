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
        calDesc1: "30-80",
        calMin: 0,
        calMin1: 30,
        calMax: 50000,
        calMax1: 80,
        calComm: 5,
        calComm1: 3,

    }, {
        id: 2,
        calType: "Fast Food",
        calProd: "Chicken Satay Wrap",
        calDesc: "50,001-100,000 ",
        calMin: 50001,
        calMax: 100000,
        calComm: 7,
        calDesc1: "20-80",
        calMin1: 20,
        calMax1: 80,
        calComm1: 6,

    }, {
        id: 3,
        calType: "Combo Set",
        calProd: "Roti Canal with ChickenCurry",
        calDesc: "100,001-150,000 ",
        calMin: 100001,
        calMax: 150000,
        calComm: 10,
        calDesc1: "15-80",
        calMin1: 15,
        calMax1: 80,
        calComm1: 2,

    }, {
        id: 4,
        calType: "Drink",
        calProd: "Pepsi",
        calDesc: "150,001-200,000 ",
        calMin: 150001,
        calMax: 200000,
        calComm: 15,
        calDesc1: "25-80",
        calMin1: 25,
        calMax1: 80,
        calComm1: 8,

    }];

    var calculates2 = [{
        id: 1,

        calDesc2: "0-25,000",
        calMin2: 0,
        calMax2: 25000,
        calComm2: 2

    }, {
        id: 2,

        calDesc2: "25,001-50,000",
        calMin2: 25001,
        calMax2: 50000,
        calComm2: 3
    }, {
        id: 3,

        calDesc2: "50,001-75,000",
        calMin2: 50001,
        calMax2: 75000,
        calComm2: 4
    }, {
        id: 4,

        calDesc2: "75,001-100,000",
        calMin2: 75001,
        calMax2: 100000,
        calComm2: 5
    }];


    var calculates3 = [{
        id: 1,

        calDesc3: "0-15,000",
        calMin3: 0,
        calMax3: 15000,
        calComm3: 2
    }, {
        id: 2,

        calDesc3: "15,001-30,000",
        calMin3: 15001,
        calMax3: 30000,
        calComm3: 4
    }, {
        id: 3,

        calDesc3: "30,001-45,000",
        calMin3: 30001,
        calMax3: 45000,
        calComm3: 6
    }, {
        id: 4,

        calDesc3: "45,001-60,000",
        calMin3: 45001,
        calMax3: 60000,
        calComm3: 8
    }];

    var calculates4 = [{
        id: 1,

        calDesc4: "0-15,000",
        calMin4: 0,
        calMax4: 15000,
        calComm4: 3
    }, {
        id: 2,

        calDesc4: "15,001-20,000",
        calMin4: 15001,
        calMax4: 20000,
        calComm4: 4
    }, {
        id: 3,

        calDesc4: "20,001-25,000",
        calMin4: 20001,
        calMax4: 25000,
        calComm4: 5
    }, {
        id: 4,

        calDesc4: "25,001-30,000",
        calMin4: 25001,
        calMax4: 30000,
        calComm4: 6
    }];

    var calculates5 = [{
        id: 1,

        calDesc5: "0-35,000",
        calMin5: 0,
        calMax5: 35000,
        calComm5: 5
    }, {
        id: 2,

        calDesc5: "35,001-55,000",
        calMin5: 35001,
        calMax5: 55000,
        calComm5: 6
    }, {
        id: 3,

        calDesc5: "55,001-75,000",
        calMin5: 55001,
        calMax5: 75000,
        calComm5: 7
    }, {
        id: 4,

        calDesc5: "75,001-95,000",
        calMin5: 75001,
        calMax5: 95000,
        calComm5: 7.5
    }];


    this.getCalculateList = function() {
        return calculates;
    };
    this.getCalculateList2 = function() {
        return calculates2;
    };
    this.getCalculateList3 = function() {
        return calculates3;
    };
    this.getCalculateList4 = function() {
        return calculates4;
    };
    this.getCalculateList5 = function() {
        return calculates5;
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
    // $scope.addFloor2 = function() {
    //     $scope.calculates.push();

    // };


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
