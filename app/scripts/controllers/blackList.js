'use strict';

/** 
 * @ngdoc function 
 * @name inflightHubApp.controller:AboutCtrl 
 * @description 
 * # AboutCtrl 
 * Controller of the inflightHubApp 
 */
angular.module('inflightHubApp')
    .controller('blackListCtrl', function($scope, blackListService) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        var fileName_select = "";
        $scope.fileNameList = [];
        $scope.fileName = {
            "id": guid(),
            "name": "xxx"
        };


        // $scope.addFileName = function() { 
        //     $scope.fileName.id = guid(); 
        //     $scope.fileName.name = fileName_select; 
        //     $scope.fileNameList.push($scope.fileName); 
        //     $scope.fileName = {}; 
        // }; 

        $scope.addFileName = function() {
            // $scope.fileName.name = fileName_select; 
            // $scope.fileNameList.push($scope.fileName); 
            // $scope.fileName = {}; 
            if (fileName_select) {
                var item = {
                    "id": guid(),
                    "name": fileName_select,
                    "listIds": [{
                        "id": 1,
                        "cardID": "4434567891234534",
                        "isDate": "10-01-2016 ",
                        "bank": "SCB",
                        "tyCard": "visa",
                        "time": "11:59 AM"
                    }, {
                        "id": 2,
                        "cardID": "9984567891244534",
                        "isDate": "08-11-2015",
                        "bank": "SCB",
                        "tyCard": "visa",
                        "time": "10:59 AM"
                    }, {
                        "id": 3,
                        "cardID": "1234567899234534",
                        "isDate": "14-10-2015 ",
                        "bank": "SCB",
                        "tyCard": "visa",
                        "time": "10:59 AM"
                    }, {
                        "id": 4,
                        "cardID": "1200987894234534",
                        "isDate": "01-09-2015 ",
                        "tyCard": "visa",
                        "bank": "SCB",
                        "time": "11:20 AM"
                    }, {
                        "id": 5,
                        "cardID": "1213667991234534",
                        "isDate": "25-08-2015 ",
                        "bank": "SCB",
                        "tyCard": "master",
                        "time": "11:09 AM"
                    }, {
                        "id": 6,
                        "cardID": "1456785891234534",
                        "isDate": "22-08-2015",
                        "bank": "SCB",
                        "tyCard": "visa",
                        "time": "09:59 AM"
                    }, {
                        "id": 7,
                        "cardID": "6564537891234534",
                        "isDate": "14-08-2015",
                        "bank": "SCB",
                        "tyCard": "master",
                        "time": "09:45 AM"
                    }, {
                        "id": 8,
                        "cardID": "1334567891234534",
                        "isDate": "24-07-2015",
                        "bank": "SCB",
                        "tyCard": "master",
                        "time": "09:23 AM"
                    }]
                };
                blackListService.addBlackList(item);
            }
        };
        $('#fileSelected').on('change', function(evt) {
            var files = $(evt.currentTarget).get(0).files;

            if (files.length > 0) {
                fileName_select = files[0].name;
                // bindDataAgain that 555 
                // $scope.addFileName(); 
            }
        });

        $scope.blackLists = blackListService.getBlackLists()


        $scope.bank = [{ Name: "SCB", people: 34 },
            { Name: "TMB", people: 37 },
            { Name: "KTB", people: 55 },
            { Name: "BBL", people: 23 },
            { Name: "GHB", people: 65 }
        ];
        $scope.human = [3985763094, 2938574938, 0985673923, 2048463930, 3048364839, 456584937565, 03836576958];

        $scope.deleteBlackList = function(id) {
            blackListService.deleteBlackList(id);
        };

    });
