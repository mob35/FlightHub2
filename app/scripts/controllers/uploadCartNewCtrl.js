'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp')
    .controller('uploadCartNewCtrl', function($scope, productService, promotionDiscountService, $filter, $routeParams) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.productPro = [{
            id: 1,
            cate: "Cart",
            name: "Class 1",
            price: 130,
            stock: 10,
            qty: 0,
            img: "images/upload/c1.png"
        }, {
            id: 2,
            cate: "Cart",
            name: "Class 2",
            price: 230,
            stock: 55,
            qty: 0,
            img: "images/upload/c2.png"
        }, {
            id: 3,
            cate: "Cart",
            name: "Class 3",
            price: 100,
            stock: 90,
            qty: 0,
            img: "images/upload/c3.png"
        }, {
            id: 10,
            cate: "Drink",
            name: "Water",
            price: 20,
            stock: 70,
            qty: 0,
            img: "images/upload/male.png"
        }, {
            id: 11,
            cate: "Drink",
            name: "Pepsi",
            price: 50,
            stock: 88,
            qty: 0,
            img: "images/drink/2-Pepsi.jpg"
        }, {
            id: 12,
            cate: "Drink",
            name: "Cocacola",
            price: 50,
            stock: 16,
            qty: 0,
            img: "images/drink/3-Cocacola.jpg"
        }, {
            id: 13,
            cate: "Drink",
            name: "Green Fanta",
            price: 30,
            stock: 35,
            qty: 0,
            img: "images/drink/4-GreenFanta.jpg"
        }, {
            id: 14,
            cate: "Drink",
            name: "Red Fanta",
            price: 30,
            stock: 65,
            qty: 0,
            img: "images/drink/5-RedFanta.jpg"
        }, {
            id: 15,
            cate: "Drink",
            name: "Orange Fanta",
            price: 30,
            stock: 37,
            qty: 0,
            img: "images/drink/6-OrangeFanta.jpg"
        }, {
            id: 16,
            cate: "Drink",
            name: "Sprite",
            price: 30,
            stock: 42,
            qty: 0,
            img: "images/drink/7-sprite.jpg"
        }];

        ////////////////////////////////////////////////////////////////////////////////////
        $scope.draggableObjects = [{ img: "images/hamburger.jpg", name: "Hamburger", qty: 0, default: 0 },
            { img: "images/Macaroni.jpg", name: "Macaroni", qty: 0, default: 0 },
            { img: "images/salad.jpg", name: "Salad", qty: 0, default: 0 },
            { img: "images/sandwich.jpg", name: "Sandwich", qty: 0, default: 0 },
            { img: "images/sapagetti.jpg", name: "Sapagetti", qty: 0, default: 0 }
        ];

        $scope.droppedObjects2 = [];
        $scope.droppedObjectsA1 = [];
        $scope.droppedObjectsB1 = [];
        $scope.droppedObjectsA2 = [];
        $scope.droppedObjectsB2 = [];
        $scope.droppedObjectsA3 = [];
        $scope.droppedObjectsB3 = [];
        $scope.droppedObjectsA4 = [];
        $scope.droppedObjectsB4 = [];
        $scope.droppedObjectsA5 = [];
        $scope.droppedObjectsB5 = [];
        $scope.droppedObjectsA6 = [];
        $scope.droppedObjectsB6 = [];
        $scope.droppedObjectsA7 = [];
        $scope.droppedObjectsB7 = [];
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
                qty1 = data.qty = 0;
            }
            // A1 ///////
        $scope.onDropCompleteA1 = function(data, evt) {
            var index = $scope.droppedObjectsA1.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsA1.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessA1 = function(data, evt) {
            console.log("A1", "$scope", "onDragSuccessA1", "", evt);
            var index = $scope.droppedObjectsA1.indexOf(data);
            var qty1 = data.qty;
            if (index > -1) {
                $scope.droppedObjectsA1.splice(index, 1);
            }
        }
        // B1 ///////
        $scope.onDropCompleteB1 = function(data, evt) {
            var index = $scope.droppedObjectsB1.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsB1.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessB1 = function(data, evt) {
            console.log("B1", "$scope", "onDragSuccessB1", "", evt);
            var index = $scope.droppedObjectsB1.indexOf(data);
            var qty1 = data.qty;
            if (index > -1) {
                $scope.droppedObjectsB1.splice(index, 1);
            }
        }
        // A2 ///////
        $scope.onDropCompleteA2 = function(data, evt) {
            var index = $scope.droppedObjectsA2.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsA2.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessA2 = function(data, evt) {
            console.log("A2", "$scope", "onDragSuccessA2", "", evt);
            var index = $scope.droppedObjectsA2.indexOf(data);
            var qty1 = data.qty;
            if (index > -1) {
                $scope.droppedObjectsA2.splice(index, 1);
            }
        }
        // B2 ///////
        $scope.onDropCompleteB2 = function(data, evt) {
            var index = $scope.droppedObjectsB2.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsB2.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessB2 = function(data, evt) {
            console.log("B2", "$scope", "onDragSuccessB2", "", evt);
            var index = $scope.droppedObjectsB2.indexOf(data);
            var qty1 = data.qty;
            if (index > -1) {
                $scope.droppedObjectsB2.splice(index, 1);
            }
        }
        // A3 ///////
        $scope.onDropCompleteA3 = function(data, evt) {
            var index = $scope.droppedObjectsA3.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsA3.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessA3 = function(data, evt) {
            console.log("A3", "$scope", "onDragSuccessA3", "", evt);
            var index = $scope.droppedObjectsA3.indexOf(data);
            var qty1 = data.qty;
            if (index > -1) {
                $scope.droppedObjectsA3.splice(index, 1);
            }
        }
        // B3 ///////
        $scope.onDropCompleteB3 = function(data, evt) {
            var index = $scope.droppedObjectsB3.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsB3.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessB3 = function(data, evt) {
            console.log("B3", "$scope", "onDragSuccessB3", "", evt);
            var index = $scope.droppedObjectsB3.indexOf(data);
            var qty1 = data.qty;
            if (index > -1) {
                $scope.droppedObjectsB3.splice(index, 1);
            }
        }
        // A4 ///////
        $scope.onDropCompleteA4 = function(data, evt) {
            var index = $scope.droppedObjectsA4.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsA4.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessA4 = function(data, evt) {
            console.log("A4", "$scope", "onDragSuccessA4", "", evt);
            var index = $scope.droppedObjectsA4.indexOf(data);
            var qty1 = data.qty;
            if (index > -1) {
                $scope.droppedObjectsA4.splice(index, 1);
            }
        }
        // B4 ///////
        $scope.onDropCompleteB4 = function(data, evt) {
            var index = $scope.droppedObjectsB4.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsB4.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessB4 = function(data, evt) {
            console.log("B4", "$scope", "onDragSuccessB4", "", evt);
            var index = $scope.droppedObjectsB4.indexOf(data);
            var qty1 = data.qty;
            if (index > -1) {
                $scope.droppedObjectsB4.splice(index, 1);
            }
        }
        // A5 ///////
        $scope.onDropCompleteA5 = function(data, evt) {
            var index = $scope.droppedObjectsA5.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsA5.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessA5 = function(data, evt) {
            console.log("A5", "$scope", "onDragSuccessA5", "", evt);
            var index = $scope.droppedObjectsA5.indexOf(data);
            var qty1 = data.qty;
            if (index > -1) {
                $scope.droppedObjectsA5.splice(index, 1);
            }
        }
        // B5 ///////
        $scope.onDropCompleteB5 = function(data, evt) {
            var index = $scope.droppedObjectsB5.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsB5.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessB5 = function(data, evt) {
            console.log("B5", "$scope", "onDragSuccessB5", "", evt);
            var index = $scope.droppedObjectsB5.indexOf(data);
            var qty1 = data.qty;
            if (index > -1) {
                $scope.droppedObjectsB5.splice(index, 1);
            }
        }
        // A6 ///////
        $scope.onDropCompleteA6 = function(data, evt) {
            var index = $scope.droppedObjectsA6.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsA6.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessA6 = function(data, evt) {
            console.log("A6", "$scope", "onDragSuccessA6", "", evt);
            var index = $scope.droppedObjectsA6.indexOf(data);
            var qty1 = data.qty;
            if (index > -1) {
                $scope.droppedObjectsA6.splice(index, 1);
            }
        }
        // B6 ///////
        $scope.onDropCompleteB6 = function(data, evt) {
            var index = $scope.droppedObjectsB6.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsB6.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessB6 = function(data, evt) {
            console.log("B6", "$scope", "onDragSuccessB6", "", evt);
            var index = $scope.droppedObjectsB6.indexOf(data);
            var qty1 = data.qty;
            if (index > -1) {
                $scope.droppedObjectsB6.splice(index, 1);
            }
        }
        // A7 ///////
        $scope.onDropCompleteA7 = function(data, evt) {
            var index = $scope.droppedObjectsA7.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsA7.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessA7 = function(data, evt) {
            console.log("A7", "$scope", "onDragSuccessA7", "", evt);
            var index = $scope.droppedObjectsA7.indexOf(data);
            var qty1 = data.qty;
            if (index > -1) {
                $scope.droppedObjectsA7.splice(index, 1);
            }
        }
        // B7 ///////
        $scope.onDropCompleteB7 = function(data, evt) {
            var index = $scope.droppedObjectsB7.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsB7.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessB7 = function(data, evt) {
            console.log("B7", "$scope", "onDragSuccessB7", "", evt);
            var index = $scope.droppedObjectsB7.indexOf(data);
            var qty1 = data.qty;
            if (index > -1) {
                $scope.droppedObjectsB7.splice(index, 1);
            }
        }
            //  ///////
        var inArray = function(array, obj) {
            var index = array.indexOf(obj);
        }


        $scope.cartType = '';
        $scope.changeCart = function(type) {
            $scope.cartType = type;
        }

        $scope.cart = $filter("filter")($scope.productPro, { cate: "Cart" });
        $scope.drink = $filter("filter")($scope.productPro, { cate: "Drink" });
        

        $scope.productType = "Cart";
        $scope.changeType = function(type) {
            $scope.productType = type;
        };

    });
