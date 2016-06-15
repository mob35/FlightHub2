'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp')
    .controller('setupCartNewCtrl', function($scope, productService, setupCartService, promotionDiscountService, $filter, $routeParams) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.productPro = [{
            id: 1,
            cate: "Food",
            name: "KoloMee",
            price: 130,
            stock: 10,
            qty: 0,
            img: "images/food/AK-1-KoloMee.png"
        }, {
            id: 2,
            cate: "Food",
            name: "Shepherds Pie",
            price: 230,
            stock: 55,
            qty: 0,
            img: "images/food/AK-2-ShepherdsPie.png"
        }, {
            id: 3,
            cate: "Food",
            name: "Pak Nassers Nasi Lemak",
            price: 100,
            stock: 90,
            qty: 0,
            img: "images/food/AK-6-PakNassersNasiLemak.png"
        }, {
            id: 4,
            cate: "Food",
            name: "Nasi Dagang with Chicken Curry",
            price: 90,
            stock: 70,
            qty: 0,
            img: "images/food/AK-7-NasiDagangwithChickenCurry.png"
        }, {
            id: 5,
            cate: "Food",
            name: "Tomato Rice with Ayam Percik",
            price: 146,
            stock: 85,
            qty: 0,
            img: "images/food/AK-8-TomatoRicewithAyamPercik.png"
        }, {
            id: 6,
            cate: "Food",
            name: "Roast Chicken with Cream Sauce",
            price: 99,
            stock: 63,
            qty: 0,
            img: "images/food/AK-11-RoastChickenwithCreamSauce.png"
        }, {
            id: 7,
            cate: "Food",
            name: "Ginger Fried Rice",
            price: 78,
            stock: 12,
            qty: 0,
            img: "images/food/AK-12-GingerFriedRicewithVegetarianChickenV.png"
        }, {
            id: 8,
            cate: "Food",
            name: "Vegetable Briyani",
            price: 340,
            stock: 66,
            qty: 0,
            img: "images/food/AK-13-VegetableBriyaniV.png"
        }, {
            id: 9,
            cate: "Food",
            name: "Chicken Rice",
            price: 120,
            stock: 36,
            qty: 0,
            img: "images/food/AK-14-ChickenRice.png"
        }, {
            id: 10,
            cate: "Drink",
            name: "Water",
            price: 20,
            stock: 70,
            qty: 0,
            img: "images/drink/1-Water.jpg"
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
        }, {
            id: 17,
            cate: "Fast",
            name: "Chicken Satay Wrap",
            price: 95,
            stock: 62,
            qty: 0,
            img: "images/fast/AK-9-ChickenSatayWrap.png"
        }, {
            id: 18,
            cate: "Fast",
            name: "Chicken Tikka Sandwich",
            price: 65,
            stock: 57,
            qty: 0,
            img: "images/fast/I5-13-ChickenTikkaSandwichwithMintMayo.jpg"
        }, {
            id: 19,
            cate: "Fast",
            name: "Assorted Sandwiches",
            price: 135,
            stock: 22,
            qty: 0,
            img: "images/fast/QC-12-AssortedSandwiches.png"
        }, {
            id: 20,
            cate: "Fast",
            name: "CornBell Peppers Sandwich",
            price: 65,
            stock: 31,
            qty: 0,
            img: "images/fast/I5-14-CornBellPeppersSandwichwithPestoMayoInMarbleBread.jpg"
        }, {
            id: 21,
            cate: "Fast",
            name: "Frankster Chicken",
            price: 65,
            stock: 18,
            qty: 0,
            img: "images/fast/QC-10-FranksterChicken.png"
        }, {
            id: 22,
            cate: "Fast",
            name: "Deli Chicken Focaccia Sandwich",
            price: 125,
            stock: 20,
            qty: 0,
            img: "images/fast/XJ-7-DeliChickenFocacciaBreadSandwich.jpg"
        }, {
            id: 23,
            cate: "Dessert",
            name: "Pancakes Maple Syrup Butter",
            price: 100,
            stock: 51,
            qty: 0,
            img: "images/dessert/QC-8-PancakesMapleSyrupButter.png"
        }, {
            id: 24,
            cate: "Dessert",
            name: "Banana Cake with Malee",
            price: 120,
            stock: 62,
            qty: 0,
            img: "images/dessert/XJ-16-BananaCakewithMaleeOrangeJuice.jpg"
        }, {
            id: 25,
            cate: "Dessert",
            name: "Yamanishi Mochi",
            price: 90,
            stock: 63,
            qty: 0,
            img: "images/dessert/XJ-15-YamanishiMochi.png"
        }, {
            id: 26,
            cate: "combo",
            name: "Macand Cheese Ribena",
            price: 310,
            stock: 43,
            qty: 0,
            img: "images/combo/AK-5-KidsMealMacandCheeseRibena.png"
        }, {
            id: 27,
            cate: "Combo",
            name: "Roti Canai With ChickenCurry",
            price: 290,
            stock: 36,
            qty: 0,
            img: "images/combo/AK-4-RotiCanaiWithChickenCurryTehTarik.png"
        }, {
            id: 28,
            cate: "Combo",
            name: "American Breakfast Set",
            price: 300,
            stock: 67,
            qty: 0,
            img: "images/combo/XJ-13-AmericanBreakfastSet.jpg"
        }, {
            id: 29,
            cate: "Combo",
            name: "Mee Goreng Mamak TehTarik",
            price: 270,
            stock: 28,
            qty: 0,
            img: "images/combo/AK-3-MeeGorengMamakTehTarik.png"
        }, {
            id: 30,
            cate: "Combo",
            name: "Chicken Rice Soup Set",
            price: 250,
            stock: 61,
            qty: 0,
            img: "images/combo/XJ-12-ChickenRiceSoupSet.jpg"
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
        $scope.droppedObjectsTemA1 = [];
        $scope.droppedObjectsTemA2 = [];
        $scope.droppedObjectsTemA3 = [];
        $scope.droppedObjectsTemA4 = [];
        $scope.droppedObjectsTemA5 = [];
        $scope.droppedObjectsTemA6 = [];
        $scope.droppedObjectsTemA7 = [];

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
            console.log($scope.droppedObjectsA1);
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


            /////////////////////////////
        $scope.onDropCompleteTemA1 = function(data, evt) {
            var index = $scope.droppedObjectsTemA1.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsTemA1.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessTemA1 = function(data, evt) {
            console.log("TemA1", "$scope", "onDragSuccessTemA1", "", evt);
            var index = $scope.droppedObjectsTemA1.indexOf(data);
            var qty1 = data.qty;
            if (index > -1) {
                $scope.droppedObjectsTemA1.splice(index, 1);
            }
        }
        /////////////////////////////
        $scope.onDropCompleteTemA2 = function(data, evt) {
            var index = $scope.droppedObjectsTemA2.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsTemA2.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessTemA2 = function(data, evt) {
            console.log("TemA2", "$scope", "onDragSuccessTemA2", "", evt);
            var index = $scope.droppedObjectsTemA2.indexOf(data);
            var qty1 = data.qty;
            if (index > -1) {
                $scope.droppedObjectsTemA2.splice(index, 1);
            }
        }
        ///////////////////////////////////////
        $scope.onDropCompleteTemA3 = function(data, evt) {
            var index = $scope.droppedObjectsTemA3.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsTemA3.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessTemA3 = function(data, evt) {
            console.log("TemA3", "$scope", "onDragSuccessTemA3", "", evt);
            var index = $scope.droppedObjectsTemA3.indexOf(data);
            var qty1 = data.qty;
            if (index > -1) {
                $scope.droppedObjectsTemA3.splice(index, 1);
            }
        }
        ///////////////////////////////////////
        $scope.onDropCompleteTemA4 = function(data, evt) {
            var index = $scope.droppedObjectsTemA4.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsTemA4.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessTemA4 = function(data, evt) {
            console.log("TemA4", "$scope", "onDragSuccessTemA4", "", evt);
            var index = $scope.droppedObjectsTemA4.indexOf(data);
            var qty1 = data.qty;
            if (index > -1) {
                $scope.droppedObjectsTemA4.splice(index, 1);
            }
        }
        ///////////////////////////////////////
        $scope.onDropCompleteTemA5 = function(data, evt) {
            var index = $scope.droppedObjectsTemA5.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsTemA5.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessTemA5 = function(data, evt) {
            console.log("TemA5", "$scope", "onDragSuccessTemA5", "", evt);
            var index = $scope.droppedObjectsTemA5.indexOf(data);
            var qty1 = data.qty;
            if (index > -1) {
                $scope.droppedObjectsTemA5.splice(index, 1);
            }
        }
        ///////////////////////////////////////
        $scope.onDropCompleteTemA6 = function(data, evt) {
            var index = $scope.droppedObjectsTemA6.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsTemA6.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessTemA6 = function(data, evt) {
            console.log("TemA6", "$scope", "onDragSuccessTemA6", "", evt);
            var index = $scope.droppedObjectsTemA6.indexOf(data);
            var qty1 = data.qty;
            if (index > -1) {
                $scope.droppedObjectsTemA6.splice(index, 1);
            }
        }
        ///////////////////////////////////////
        $scope.onDropCompleteTemA7 = function(data, evt) {
            var index = $scope.droppedObjectsTemA7.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsTemA7.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessTemA7 = function(data, evt) {
            console.log("TemA7", "$scope", "onDragSuccessTemA7", "", evt);
            var index = $scope.droppedObjectsTemA7.indexOf(data);
            var qty1 = data.qty;
            if (index > -1) {
                $scope.droppedObjectsTemA7.splice(index, 1);
            }
        }
        ///////////////////////////////////////
            ///////////////////////////////
        var inArray = function(array, obj) {
            var index = array.indexOf(obj);
        }


        $scope.cartType = '';
        $scope.changeCart = function(type) {
            $scope.cartType = type;
        }
        $scope.cartTemType = '';
        $scope.changeTemCart = function(type) {
            $scope.cartTemType = type ;
        }

        $scope.food = $filter("filter")($scope.productPro, { cate: "Food" });
        $scope.drink = $filter("filter")($scope.productPro, { cate: "Drink" });
        $scope.fast = $filter("filter")($scope.productPro, { cate: "Fast" });
        $scope.dessert = $filter("filter")($scope.productPro, { cate: "Dessert" });
        $scope.combo = $filter("filter")($scope.productPro, { cate: "Combo" });

        $scope.productType = "Food";
        $scope.changeType = function(type) {
            $scope.productType = type;
        };
// ////////////////////////////////////////////////
        // $scope.content = "cartAB";
        $scope.cartcontentType = "cartAB";
        $scope.changecontentCart = function(type) {
            $scope.cartcontentType = type;
        };
// ///////////////////////////////////////////////
$scope.cartID = $routeParams.cardID;

        $scope.carts = [];
        $scope.isEdit = $routeParams.cardID ? true : false;
        $scope.newCart = {};
        $scope.init = function() {
            $scope.carts = setupCartService.getCartList();
           

        }

        $scope.newFn = function() {
            $scope.newCart = setupCartService.getTemp();

        };
        $scope.setTemp = function() {
            //$scope.newCart.cartName = "555";
            setupCartService.setTemp($scope.newCart);
        };
        $scope.clearData = function() {
            setupCartService.clearTemp();
        };
        $scope.addCart = function() {
            $scope.newCart.id = guid();
            $scope.newCart.floor[0].cartProd = $scope.droppedObjectsA1;
            $scope.carts.push($scope.newCart);
            $scope.newFn();
            setupCartService.clearTemp();
           // uploadCartService.setCarts($scope.carts);
        };
        $scope.deleteCart = function(id) {
            setupCartService.deleteCart(id);
        };
        $scope.removeItem = function(index) {
                $scope.newCart.floor.splice(index, 1);
            },
            $scope.addFloor = function() {
                $scope.newCart.floor.push({
                    floorId: ($scope.newCart.floor.length + 1),
                    cartCate: "",
                    cartProd: []
                });
                console.log($scope.newCart);
            };

        $scope.setVal = function() {
            // alert(''); 
            // var result = $filter("filter")($scope.carts, { id: $routeParams.cardID }); 
            var result = setupCartService.getCart($scope.carts, $routeParams.cardID);
            console.log(result);
            if (result) {
                $scope.newCart = result;
                $scope.setProduct();
            }

        };

        $scope.editFn = function() {
            $scope.newCart.floor[0].cartProd = $scope.droppedObjectsA1;
            setupCartService.clearTemp();
        };

        $scope.setProduct = function() {
            if ($routeParams.floorId && $routeParams.cardID && typeof $scope.newCart.floor != "undefined") {
                for (var i = 0; i < $scope.newCart.floor.length; i++) { //หาชั้นที่จะแอดค่า
                    if ($routeParams.floorId == i + 1) {
                        var cartProducts = $scope.newCart.floor[i].cartProd;
                        for (var p = 0; p < $scope.product.length; p++) { //หาขนาดของโปรดัก
                            for (var j = 0; j < cartProducts.length; j++) { //หาขนาดของโปรดักที่อยู่ในรถเข็น
                                if ($scope.product[p].id == cartProducts[j].id) {
                                    $scope.product[p].qty = cartProducts[j].qty;
                                    $scope.product[p].stock = cartProducts[j].stock;
                                }
                            }
                        }
                        break;
                    }
                }
            }
        }

        $scope.addProduct = function() {
            console.log($scope.newCart);
            var addItems = [];
            for (var i = 0; i < $scope.product.length; i++) {
                console.log($scope.product[i]);
                if ($scope.product[i].qty > 0) {
                    addItems.push($scope.product[i]);
                }
            }

            console.log($scope.newCart);
            if (!$routeParams.cardID) {

            } else {
                $scope.newCart = setupCartService.getTemp();

            }
            for (var i = 0; i < $scope.newCart.floor.length; i++) {
                if ($routeParams.floorId == i + 1) {
                    $scope.newCart.floor[i].cartProd = addItems;
                    break;
                }
            }
        };




        // $scope.alert = function(){
        //     alert('');
        // }


        $scope.init();

        if ($routeParams.cardID) {
            $scope.setVal();
        } else {
            $scope.newFn();
        }

    })
.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    };
});
