'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp').service('setupCartService', function() {
    var carts = [{
        id: 1,
        cartName: "Duty Free",
        floor: [{
            floorId: 1,
            cartCate: "A1 Food",
            cartProd: [{
                id: 1,
                cate: "Food",
                name: "KoloMee",
                price: 130,
                stock: 9,
                qty: 1,
                img: "images/food/AK-1-KoloMee.png"
            }, {
                id: 23,
                cate: "Dessert",
                name: "Pancakes Maple Syrup Butter",
                price: 100,
                stock: 51,
                qty: 0,
                img: "images/dessert/QC-8-PancakesMapleSyrupButter.png"
            }, {
                id: 10,
                cate: "Drink",
                name: "Water",
                price: 20,
                stock: 69,
                qty: 1,
                img: "images/drink/1-Water.jpg"
            }]
        }, {
            floorId: 2,
            cartCate: "A2 Foodx",
            cartProd: [{
                id: 16,
                cate: "Drink",
                name: "Sprite",
                price: 30,
                stock: 41,
                qty: 1,
                img: "images/drink/7-sprite.jpg"
            }]
        }]
    }, {
        id: 2,
        cartName: "Coffee Break",
        floor: [{
            floorId: 1,
            cartCate: "A1 Food",
            cartProd: [{
                id: 1,
                cate: "Food",
                name: "KoloMee",
                price: 130,
                stock: 9,
                qty: 1,
                img: "images/food/AK-1-KoloMee.png"
            }, {
                id: 10,
                cate: "Drink",
                name: "Water",
                price: 20,
                stock: 69,
                qty: 1,
                img: "images/drink/1-Water.jpg"
            }]
        }, {
            floorId: 2,
            cartCate: "A2 Foodx",
            cartProd: [{
                id: 16,
                cate: "Drink",
                name: "Sprite",
                price: 30,
                stock: 41,
                qty: 1,
                img: "images/drink/7-sprite.jpg"
            }]
        }]
    }];
    var varTemp = {
        id: guid(),
        cartName: "",
        floor: [{
            floorId: 1,
            cartCate: "",
            cartProd: []
        }]
    };

    this.getCartList = function() {
        return carts;
    };

    this.getCart = function(arr, id) {
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
    this.deleteCart = function(id) {
        for (var i = 0; i < carts.length; i++) {
            if (carts[i].id == id) {
                carts.splice(i, 1);
                break;
            }
        }
        return carts;
    };
    this.getTemp = function() {
        return varTemp;
    };
    this.setTemp = function(item) {
        varTemp = item;
    };
    this.clearTemp = function() {
        varTemp = {
            id: guid(),
            cartName: "",
            floor: [{
                floorId: 1,
                cartCate: "",
                cartProd: []
            }]
        };
    };
});
