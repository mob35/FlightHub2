'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp')
    .controller('comboProductNewCtrl', function($scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        //    $scope.dragObjects = ["Object1", "Object2"]
        // $scope.dropObjects = []
        // var clipboard
        // $scope.handleDrop = function() {
        //     if (clipboard != undefined) {
        //         $scope.dropObjects.push(clipboard);
        //         var index = $scope.dragObjects.indexOf(clipboard)
        //         $scope.dragObjects.splice(index, 1);
        //         clipboard = undefined
        //     }
        // }
        // $scope.handleDrag = function(obj) {
        // clipboard = obj;
        // }

        // })
        // .directive('droppable', function() {
        //         return {
        //             scope: {
        //                 drop: '&' // parent
        //             },
        //             link: function(scope, element) {
        //                 var el = element[0];
        //                 el.addEventListener('drop', function(e) {
        //                     scope.$apply('drop()');
        //                     return false;
        //                 }, false);
        //                 el.addEventListener('dragover', function(e) {
        //                     e.dataTransfer.dropEffect = 'move';
        //                     if (e.preventDefault) e.preventDefault();
        //                     return false;
        //                 }, false);
        //             }
        //         }
        //     }).directive('draggable', function() {
        //             return {
        //                 scope: {
        //                     drag: '&' // parent
        //                 },
        //                 link: function(scope, element) {
        //                     var el = element[0];
        //                     el.draggable = true;
        //                     el.addEventListener('dragstart', function(e) {
        //                         console.log(this.id);
        //                         e.dataTransfer.setData('TEXT', " ");
        //                         e.dataTransfer.effectAllowed = 'move';
        //                         scope.$apply('drag()');
        //                         return false;
        //                     }, false);

        //                     el.addEventListener('dragend', function(e) {
        //                         return false;
        //                     }, false);
        //                 }
        //             }



        ////////////////////////////////////////////////////////////////////////////////////
        $scope.draggableObjects = [{ name: "images/hamburger.jpg", qty: 0, default: 0 },
            { name: "images/Macaroni.jpg", qty: 0, default: 0 },
            { name: "images/salad.jpg", qty: 0, default: 0 },
            { name: "images/sandwich.jpg", qty: 0, default: 0 },
            { name: "images/sapagetti.jpg", qty: 0, default: 0 }
        ];
        $scope.droppedObjects1 = [];
        $scope.droppedObjects2 = [];
        $scope.droppedObjects3 = [];
        $scope.onDropComplete1 = function(data, evt) {
            var index = $scope.droppedObjects1.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1){
                $scope.droppedObjects1.push(data);

            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccess1 = function(data, evt) {
            console.log("133", "$scope", "onDragSuccess1", "", evt);
            var index = $scope.droppedObjects1.indexOf(data);
            var qty1 = data.qty;
            if (index > -1) {
                $scope.droppedObjects1.splice(index, 1);
            }

        }
         $scope.onDropComplete3 = function(data, evt) {
            var index = $scope.droppedObjects3.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1){
                $scope.droppedObjects3.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccess3 = function(data, evt) {
            console.log("133", "$scope", "onDragSuccess1", "", evt);
            var index = $scope.droppedObjects3.indexOf(data);
            if (index > -1) {
                $scope.droppedObjects3.splice(index, 1);
            }
        }
        // TRASH ///////
        $scope.onDragSuccess2 = function(data, evt) {
            var index = $scope.droppedObjects2.indexOf(data);
            if (index > -1) {
                $scope.droppedObjects2.splice(index, 1);
            }
        }
        $scope.onDropComplete2 = function(data, evt) {
            var index = $scope.droppedObjects2.indexOf(data);
            var qty1 = data.qty;
            if (index == -1) {
                $scope.droppedObjects2.splice(data);
            }
            qty1  = data.qty = 0;
        }
        //  ///////
        var inArray = function(array, obj) {
            var index = array.indexOf(obj);
        }

        $scope.limitNumber = 5;
        $scope.runNumber = 0;

        $scope.scrollLeft = function() {
            if ($scope.runNumber > 0) {
                $scope.runNumber--;
            }
        };
        $scope.scrollRight = function() {
            if ($scope.runNumber < $scope.comboSet.length - $scope.limitNumber) {
                $scope.runNumber++;
            }
        };


    });
