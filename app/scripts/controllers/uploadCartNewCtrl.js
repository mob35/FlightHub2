'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp')
    .controller('uploadCartNewCtrl', function($scope, productService, uploadCartService, promotionDiscountService, $filter, $routeParams) {
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
            cate: "Crew",
            name: "Nirut",
            price: 20,
            stock: 70,
            qty: 0,
            img: "images/upload/male.png"
        }, {
            id: 11,
            cate: "Crew",
            name: "Somchai",
            price: 50,
            stock: 88,
            qty: 0,
            img: "images/upload/male.png"
        }, {
            id: 12,
            cate: "Crew",
            name: "Aekkachai",
            price: 50,
            stock: 16,
            qty: 0,
            img: "images/upload/male.png"
        }, {
            id: 13,
            cate: "Crew",
            name: "Lampi",
            price: 30,
            stock: 35,
            qty: 0,
            img: "images/upload/female.png"
        }, {
            id: 14,
            cate: "Crew",
            name: "Wanna",
            price: 30,
            stock: 65,
            qty: 0,
            img: "images/upload/female.png"
        }, {
            id: 15,
            cate: "Crew",
            name: "Orathai",
            price: 30,
            stock: 37,
            qty: 0,
            img: "images/upload/female.png"
        }, {
            id: 16,
            cate: "Crew",
            name: "Seesamon",
            price: 30,
            stock: 42,
            qty: 0,
            img: "images/upload/female.png"
        }];

        ////////////////////////////////////////////////////////////////////////////////////
        $scope.draggableObjects = [{ img: "images/hamburger.jpg", name: "Hamburger", qty: 0, default: 0 },
            { img: "images/Macaroni.jpg", name: "Macaroni", qty: 0, default: 0 },
            { img: "images/salad.jpg", name: "Salad", qty: 0, default: 0 },
            { img: "images/sandwich.jpg", name: "Sandwich", qty: 0, default: 0 },
            { img: "images/sapagetti.jpg", name: "Sapagetti", qty: 0, default: 0 }
        ];

        $scope.droppedObjects2 = [];
        // Inbound
        $scope.droppedObjectsInboundSec1 = [];
        $scope.droppedObjectsInboundSec2 = [];
        $scope.droppedObjectsInboundSec3 = [];
        $scope.droppedObjectsInboundSec4 = [];
        // Outbound
        $scope.droppedObjectsOutboundSec1 = [];
        $scope.droppedObjectsOutboundSec2 = [];
        $scope.droppedObjectsOutboundSec3 = [];
        $scope.droppedObjectsOutboundSec4 = [];
        // QuickTurnLeft
        $scope.droppedObjectsQuickTurnLeftSec1 = [];
        $scope.droppedObjectsQuickTurnLeftSec2 = [];
        $scope.droppedObjectsQuickTurnLeftSec3 = [];
        $scope.droppedObjectsQuickTurnLeftSec4 = [];
        // QuickTurnRight
        $scope.droppedObjectsQuickTurnRightSec1 = [];
        $scope.droppedObjectsQuickTurnRightSec2 = [];
        $scope.droppedObjectsQuickTurnRightSec3 = [];
        $scope.droppedObjectsQuickTurnRightSec4 = [];

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
            // InboundSec1 ///////
        $scope.onDropCompleteInboundSec1 = function(data, evt) {
            var index = $scope.droppedObjectsInboundSec1.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsInboundSec1.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessInboundSec1 = function(data, evt) {
                console.log("InboundSec1", "$scope", "onDragSuccessInboundSec1", "", evt);
                var index = $scope.droppedObjectsInboundSec1.indexOf(data);
                var qty1 = data.qty;
                if (index > -1) {
                    $scope.droppedObjectsInboundSec1.splice(index, 1);
                }
            }
            // InboundSec2 ///////
        $scope.onDropCompleteInboundSec2 = function(data, evt) {
            var index = $scope.droppedObjectsInboundSec2.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsInboundSec2.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessInboundSec2 = function(data, evt) {
                console.log("InboundSec2", "$scope", "onDragSuccessInboundSec2", "", evt);
                var index = $scope.droppedObjectsInboundSec2.indexOf(data);
                var qty1 = data.qty;
                if (index > -1) {
                    $scope.droppedObjectsInboundSec2.splice(index, 1);
                }
            }
            // InboundSec3 ///////
        $scope.onDropCompleteInboundSec3 = function(data, evt) {
            var index = $scope.droppedObjectsInboundSec3.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsInboundSec3.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessInboundSec3 = function(data, evt) {
                console.log("InboundSec3", "$scope", "onDragSuccessInboundSec3", "", evt);
                var index = $scope.droppedObjectsInboundSec3.indexOf(data);
                var qty1 = data.qty;
                if (index > -1) {
                    $scope.droppedObjectsInboundSec3.splice(index, 1);
                }
            }
            // InboundSec4 ///////
        $scope.onDropCompleteInboundSec4 = function(data, evt) {
            var index = $scope.droppedObjectsInboundSec4.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsInboundSec4.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessInboundSec4 = function(data, evt) {
                console.log("InboundSec4", "$scope", "onDragSuccessInboundSec4", "", evt);
                var index = $scope.droppedObjectsInboundSec4.indexOf(data);
                var qty1 = data.qty;
                if (index > -1) {
                    $scope.droppedObjectsInboundSec4.splice(index, 1);
                }
            }
            // OutboundSec1 ///////
        $scope.onDropCompleteOutboundSec1 = function(data, evt) {
            var index = $scope.droppedObjectsOutboundSec1.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsOutboundSec1.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessOutboundSec1 = function(data, evt) {
                console.log("OutboundSec1", "$scope", "onDragSuccessOutboundSec1", "", evt);
                var index = $scope.droppedObjectsOutboundSec1.indexOf(data);
                var qty1 = data.qty;
                if (index > -1) {
                    $scope.droppedObjectsOutboundSec1.splice(index, 1);
                }
            }
            // OutboundSec2 ///////
        $scope.onDropCompleteOutboundSec2 = function(data, evt) {
            var index = $scope.droppedObjectsOutboundSec2.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsOutboundSec2.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessOutboundSec2 = function(data, evt) {
                console.log("OutboundSec2", "$scope", "onDragSuccessOutboundSec2", "", evt);
                var index = $scope.droppedObjectsOutboundSec2.indexOf(data);
                var qty1 = data.qty;
                if (index > -1) {
                    $scope.droppedObjectsOutboundSec2.splice(index, 1);
                }
            }
            // OutboundSec3 ///////
        $scope.onDropCompleteOutboundSec3 = function(data, evt) {
            var index = $scope.droppedObjectsOutboundSec3.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsOutboundSec3.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessOutboundSec3 = function(data, evt) {
                console.log("OutboundSec3", "$scope", "onDragSuccessOutboundSec3", "", evt);
                var index = $scope.droppedObjectsOutboundSec3.indexOf(data);
                var qty1 = data.qty;
                if (index > -1) {
                    $scope.droppedObjectsOutboundSec3.splice(index, 1);
                }
            }
            // OutboundSec4 ///////
        $scope.onDropCompleteOutboundSec4 = function(data, evt) {
            var index = $scope.droppedObjectsOutboundSec4.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsOutboundSec4.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessOutboundSec4 = function(data, evt) {
                console.log("OutboundSec4", "$scope", "onDragSuccessOutboundSec4", "", evt);
                var index = $scope.droppedObjectsOutboundSec4.indexOf(data);
                var qty1 = data.qty;
                if (index > -1) {
                    $scope.droppedObjectsOutboundSec4.splice(index, 1);
                }
            }
            // QuickTurnLeftSec1 ///////
        $scope.onDropCompleteQuickTurnLeftSec1 = function(data, evt) {
            var index = $scope.droppedObjectsQuickTurnLeftSec1.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsQuickTurnLeftSec1.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessQuickTurnLeftSec1 = function(data, evt) {
                console.log("QuickTurnLeftSec1", "$scope", "onDragSuccessQuickTurnLeftSec1", "", evt);
                var index = $scope.droppedObjectsQuickTurnLeftSec1.indexOf(data);
                var qty1 = data.qty;
                if (index > -1) {
                    $scope.droppedObjectsQuickTurnLeftSec1.splice(index, 1);
                }
            }
            // QuickTurnLeftSec2 ///////
        $scope.onDropCompleteQuickTurnLeftSec2 = function(data, evt) {
            var index = $scope.droppedObjectsQuickTurnLeftSec2.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsQuickTurnLeftSec2.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessQuickTurnLeftSec2 = function(data, evt) {
                console.log("QuickTurnLeftSec2", "$scope", "onDragSuccessQuickTurnLeftSec2", "", evt);
                var index = $scope.droppedObjectsQuickTurnLeftSec2.indexOf(data);
                var qty1 = data.qty;
                if (index > -1) {
                    $scope.droppedObjectsQuickTurnLeftSec2.splice(index, 1);
                }
            }
            // QuickTurnLeftSec3 ///////
        $scope.onDropCompleteQuickTurnLeftSec3 = function(data, evt) {
            var index = $scope.droppedObjectsQuickTurnLeftSec3.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsQuickTurnLeftSec3.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessQuickTurnLeftSec3 = function(data, evt) {
                console.log("QuickTurnLeftSec3", "$scope", "onDragSuccessQuickTurnLeftSec3", "", evt);
                var index = $scope.droppedObjectsQuickTurnLeftSec3.indexOf(data);
                var qty1 = data.qty;
                if (index > -1) {
                    $scope.droppedObjectsQuickTurnLeftSec3.splice(index, 1);
                }
            }
            // QuickTurnLeftSec4 ///////
        $scope.onDropCompleteQuickTurnLeftSec4 = function(data, evt) {
            var index = $scope.droppedObjectsQuickTurnLeftSec4.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsQuickTurnLeftSec4.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessQuickTurnLeftSec4 = function(data, evt) {
                console.log("QuickTurnLeftSec4", "$scope", "onDragSuccessQuickTurnLeftSec4", "", evt);
                var index = $scope.droppedObjectsQuickTurnLeftSec4.indexOf(data);
                var qty1 = data.qty;
                if (index > -1) {
                    $scope.droppedObjectsQuickTurnLeftSec4.splice(index, 1);
                }
            }
            // QuickTurnRightSec1 ///////
        $scope.onDropCompleteQuickTurnRightSec1 = function(data, evt) {
            var index = $scope.droppedObjectsQuickTurnRightSec1.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsQuickTurnRightSec1.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessQuickTurnRightSec1 = function(data, evt) {
                console.log("QuickTurnRightSec1", "$scope", "onDragSuccessQuickTurnRightSec1", "", evt);
                var index = $scope.droppedObjectsQuickTurnRightSec1.indexOf(data);
                var qty1 = data.qty;
                if (index > -1) {
                    $scope.droppedObjectsQuickTurnRightSec1.splice(index, 1);
                }
            }
            // QuickTurnRightSec2 ///////
        $scope.onDropCompleteQuickTurnRightSec2 = function(data, evt) {
            var index = $scope.droppedObjectsQuickTurnRightSec2.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsQuickTurnRightSec2.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessQuickTurnRightSec2 = function(data, evt) {
                console.log("QuickTurnRightSec2", "$scope", "onDragSuccessQuickTurnRightSec2", "", evt);
                var index = $scope.droppedObjectsQuickTurnRightSec2.indexOf(data);
                var qty1 = data.qty;
                if (index > -1) {
                    $scope.droppedObjectsQuickTurnRightSec2.splice(index, 1);
                }
            }
            // QuickTurnRightSec3 ///////
        $scope.onDropCompleteQuickTurnRightSec3 = function(data, evt) {
            var index = $scope.droppedObjectsQuickTurnRightSec3.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsQuickTurnRightSec3.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessQuickTurnRightSec3 = function(data, evt) {
                console.log("QuickTurnRightSec3", "$scope", "onDragSuccessQuickTurnRightSec3", "", evt);
                var index = $scope.droppedObjectsQuickTurnRightSec3.indexOf(data);
                var qty1 = data.qty;
                if (index > -1) {
                    $scope.droppedObjectsQuickTurnRightSec3.splice(index, 1);
                }
            }
            // QuickTurnRightSec4 ///////
        $scope.onDropCompleteQuickTurnRightSec4 = function(data, evt) {
            var index = $scope.droppedObjectsQuickTurnRightSec4.indexOf(data);
            var qty1 = data.qty;
            console.log(data);
            if (index == -1) {
                $scope.droppedObjectsQuickTurnRightSec4.push(data);
            }
            qty1 = data.qty++;
            console.log(data.qty);
        }
        $scope.onDragSuccessQuickTurnRightSec4 = function(data, evt) {
            console.log("QuickTurnRightSec4", "$scope", "onDragSuccessQuickTurnRightSec4", "", evt);
            var index = $scope.droppedObjectsQuickTurnRightSec4.indexOf(data);
            var qty1 = data.qty;
            if (index > -1) {
                $scope.droppedObjectsQuickTurnRightSec4.splice(index, 1);
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
        $scope.crew = $filter("filter")($scope.productPro, { cate: "Crew" });


        $scope.productType = "Cart";
        $scope.changeType = function(type) {
            $scope.productType = type;
        };

        $scope.uploadContent = "uploadCartInbound";
        $scope.uploadCartcontentType = "uploadCartInbound";
        $scope.uploadChangecontentCart = function(type) {
            $scope.uploadCartcontentType = type;
        };

        $scope.uploads = [];
        $scope.isEdit = $routeParams.uploadID ? true : false;
        $scope.newUpload = {};
        $scope.init = function() {
            $scope.uploads = uploadCartService.getUploadList();
            // $scope.carts = setupCartService.getCartList();
        }

        $scope.newFn = function() {
            $scope.newUpload = uploadCartService.getTemp();
        };

        $scope.addUpload = function() {
            $scope.newUpload.id = guid();
            $scope.uploads.push($scope.newUpload);

            $scope.newFn();
            uploadCartService.clearTemp();

        };

        $scope.clearData = function() {
             uploadCartService.clearTemp();
        };
        $scope.removeItem = function(index) {
                $scope.newUpload.cart.splice(index, 1);
            },

            $scope.setTemp = function() {
                uploadCartService.setTemp($scope.newUpload);
            };
        $scope.addFloor = function() {
            $scope.newUpload.cart.push({

            });
            console.log($scope.newUpload);
        };

        $scope.deleteUpload = function(id) {
            uploadCartService.deleteUpload(id);
        };

        $scope.setVal = function() {
            // alert(''); 
            // var result = $filter("filter")($scope.carts, { id: $routeParams.cardID }); 
            var result = uploadCartService.getUpload($scope.uploads, $routeParams.uploadID);
            console.log(result);
            if (result) {
                $scope.newUpload = result;
            }

        };

        $scope.editFn = function() {
            // 
        };
        $scope.init();

        if ($routeParams.uploadID) {
            $scope.setVal();
        } else {
            $scope.newFn();
        }

    });
