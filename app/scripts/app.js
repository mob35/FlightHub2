 function guid() {
     function s4() {
         return Math.floor((1 + Math.random()) * 0x10000)
             .toString(16)
             .substring(1);
     }
     return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
         s4() + '-' + s4() + s4() + s4();
 }
 'use strict';

 /**
  * @ngdoc overview
  * @name inflightHubApp
  * @description
  * # inflightHubApp
  *
  * Main module of the application.
  */


 angular
     .module('inflightHubApp', [
         'ngAnimate',
         'ngCookies',
         'ngResource',
         'ngRoute',
         'ngSanitize',
         'ngTouch',
         'ngMaterial',
         'ngDraggable',
         'ui.sortable',
         // 'ngMaterialDatePicker',
         'dndLists'
     ])
     .config(function($routeProvider) {
         $routeProvider
             .when('/', {
                 templateUrl: 'views/main.html',
                 controller: 'MainCtrl',
                 controllerAs: 'main'
             })
             .when('/about', {
                 templateUrl: 'views/about.html',
                 controller: 'AboutCtrl',
                 controllerAs: 'about'
             })
             .when('/home', {
                 templateUrl: 'views/home.html',
                 controller: 'homeCtrl',
                 controllerAs: 'homeCtrl'

             })
             .when('/dnd', {
                 templateUrl: 'views/dnd.html',
                 controller: 'NestedListsDemoController',
                 controllerAs: 'NestedListsDemoController'

             })
             .when('/dnd/:cardID', {
                 templateUrl: 'views/dnd.html',
                 controller: 'NestedListsDemoController',
                 controllerAs: 'NestedListsDemoController'

             })
             .when('/setupCart', {
                 templateUrl: 'views/setupCart.html',
                 controller: 'setupCartCtrl',
                 controllerAs: 'setupCart'

             })
             .when('/setupCartAdd', {
                 templateUrl: 'views/setupCartAdd.html',
                 controller: 'setupCartCtrl',
                 controllerAs: 'setupCart'

             })
             .when('/setupCartAdd/:cardID', {
                 templateUrl: 'views/setupCartAdd.html',
                 controller: 'setupCartCtrl',
                 controllerAs: 'setupCart'

             })
            .when('/setupCartNew', {
                 templateUrl: 'views/setupCartNew.html',
                 controller: 'setupCartNewCtrl',
                 controllerAs: 'setupCartNew'

             })
            .when('/setupCartNew/:cardID', {
                 templateUrl: 'views/setupCartNew.html',
                 controller: 'setupCartNewCtrl',
                 controllerAs: 'setupCartNew'

             })
             .when('/setupCartProduct', {
                 templateUrl: 'views/setupCartProduct.html',
                 controller: 'setupCartCtrl',
                 controllerAs: 'setupCart'

             })
             .when('/setupCartProduct/:cardID/:floorId', {
                 templateUrl: 'views/setupCartProduct.html',
                 controller: 'setupCartCtrl',
                 controllerAs: 'setupCart'

             })
             .when('/blackList', {
                 templateUrl: 'views/blackList.html',
                 controller: 'blackListCtrl',
                 controllerAs: 'blackList'

             })
             .when('/blackListlist', {
                 templateUrl: 'views/blackListlist.html',
                 controller: 'blackListCtrl',
                 controllerAs: 'blackList'

             })

         .when('/blackListDetail/:blacklistID', {
             templateUrl: 'views/blackListlist.html',
             controller: 'blackListDetailCtrl',
             controllerAs: 'blackList'

         })

         .when('/promotionDiscount', {
                 templateUrl: 'views/promotionDiscount.html',
                 controller: 'promotionDiscountCtrl',
                 controllerAs: 'promotionDiscount'

             })
             .when('/promotionDiscountAdd/:promotionID', {
                 templateUrl: 'views/promotionDiscountAdd.html',
                 controller: 'promotionDiscountCtrl',
                 controllerAs: 'promotionDiscount'

             })
             .when('/promotionDiscountAdd', {
                 templateUrl: 'views/promotionDiscountAdd.html',
                 controller: 'promotionDiscountCtrl',
                 controllerAs: 'promotionDiscount'

             })
             .when('/comboProduct', {
                 templateUrl: 'views/comboProduct.html',
                 controller: 'comboProductCtrl',
                 controllerAs: 'comboProduct'

             })
             .when('/comboProductAdd', {
                 templateUrl: 'views/comboProductAdd.html',
                 controller: 'comboProductCtrl',
                 controllerAs: 'comboProduct'

             })
             .when('/comboProductAdd/:comboID', {
                 templateUrl: 'views/comboProductAdd.html',
                 controller: 'comboProductCtrl',
                 controllerAs: 'comboProduct'

             })
             .when('/comboProductNew', {
                 templateUrl: 'views/comboProductNew.html',
                 controller: 'comboProductNewCtrl',
                 controllerAs: 'comboProductNew'

             })
             .when('/comboProductNew2', {
                 templateUrl: 'views/comboProductNew2.html',
                 controller: 'comboProductNew2Ctrl',
                 controllerAs: 'comboProductNew2'

             })
             .when('/comboProductNew2/:comboID', {
                 templateUrl: 'views/comboProductNew2.html',
                 controller: 'comboProductNew2Ctrl',
                 controllerAs: 'comboProductNew2'

             })
             .when('/addProduct', {
                 templateUrl: 'views/addProduct.html',
                 controller: 'addProductCtrl',
                 controllerAs: 'addProduct'

             })
             .when('/addProduct/:comboID', {
                 templateUrl: 'views/addProduct.html',
                 controller: 'addProductCtrl',
                 controllerAs: 'addProduct'

             })
             .when('/product', {
                 templateUrl: 'views/product.html',
                 controller: 'comboProductCtrl',
                 controllerAs: 'comboProduct'

             })
             .when('/product/:comboID/:floorId', {
                 templateUrl: 'views/product.html',
                 controller: 'comboProductCtrl',
                 controllerAs: 'comboProduct'

             })
             .when('/promotionProduct', {
                 templateUrl: 'views/promotionProduct.html',
                 controller: 'promotionDiscountCtrl',
                 controllerAs: 'promotionDiscount'

             })
             .when('/promotionProduct/:comboID/:floorId', {
                 templateUrl: 'views/promotionProduct.html',
                 controller: 'promotionDiscountCtrl',
                 controllerAs: 'promotionDiscount'

             })
             .when('/promotionProduct/:comboID/:floorFreeId', {
                 templateUrl: 'views/promotionProduct.html',
                 controller: 'promotionDiscountCtrl',
                 controllerAs: 'promotionDiscount'

             })
             .when('/exchangeMoney', {
                 templateUrl: 'views/exchangeMoney.html',
                 controller: 'exchangeMoneyCtrl',
                 controllerAs: 'exchangeMoney'

             })
             .when('/exchangeMoneyAdd', {
                 templateUrl: 'views/exchangeMoneyAdd.html',
                 controller: 'exchangeMoneyCtrl',
                 controllerAs: 'exchangeMoney'

             })
             .when('/exchangeMoneyAdd/:exchangeID', {
                 templateUrl: 'views/exchangeMoneyAdd.html',
                 controller: 'exchangeMoneyCtrl',
                 controllerAs: 'exchangeMoney'

             })
             .when('/dailyAmount', {
                 templateUrl: 'views/dailyAmount.html',
                 controller: 'dailyAmountCtrl',
                 controllerAs: 'dailyAmount'

             })
             .when('/dailyFlight', {
                 templateUrl: 'views/dailyFlight.html',
                 controller: 'dailyFlightCtrl',
                 controllerAs: 'dailyFlight'

             })
             .when('/dailyIncluded', {
                 templateUrl: 'views/dailyIncluded.html',
                 controller: 'dailyIncludedCtrl',
                 controllerAs: 'dailyIncluded'

             })
             .when('/dailyExcluded', {
                 templateUrl: 'views/dailyExcluded.html',
                 controller: 'dailyExcludedCtrl',
                 controllerAs: 'dailyExcluded'

             })
             .when('/uploadCartAdd', {
                 templateUrl: 'views/uploadCartAdd.html',
                 controller: 'uploadCartCtrl',
                 controllerAs: 'uploadCart'

             })
             .when('/uploadCartAdd/:uploadID', {
                 templateUrl: 'views/uploadCartAdd.html',
                 controller: 'uploadCartCtrl',
                 controllerAs: 'uploadCart'

             })
             .when('/uploadCart', {
                 templateUrl: 'views/uploadCart.html',
                 controller: 'uploadCartNewCtrl',
                 controllerAs: 'uploadCartNew'

             })
             .when('/uploadCartNew', {
                 templateUrl: 'views/uploadCartNew.html',
                 controller: 'uploadCartNewCtrl',
                 controllerAs: 'uploadCartNew'

             })
             .when('/uploadCartNew/:uploadID', {
                 templateUrl: 'views/uploadCartNew.html',
                 controller: 'uploadCartNewCtrl',
                 controllerAs: 'uploadCartNew'
                 })
             .when('/calculate', {
                 templateUrl: 'views/calculate.html',
                 controller: 'calculateCtrl',
                 controllerAs: 'calculateCtrl'

             })
             .when('/insentive', {
                 templateUrl: 'views/insentive.html',
                 controller: 'calculateCtrl',
                 controllerAs: 'calculateCtrl'

             })
             .when('/report', {
                 templateUrl: 'views/report.html',
                 controller: 'reportCtrl',
                 controllerAs: 'reportCtrl'

             })
             .when('/test', {
                 templateUrl: 'views/nested.html',
                 controller: 'nestedCtrl',
                 controllerAs: 'nestedCtrl'

             })




         .otherwise({
             redirectTo: '/'
         });
     });
