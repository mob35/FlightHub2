'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp')
  .controller('nestedCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.models = {
        selected: null,
        templates: [
            {type: "item", id: 2},
            {type: "container", id: 1, columns: [[], []]}
        ],
        dropzones: {
            "A": [
                {
                    "type": "container",
                    "id": 1,
                    "columns": [
                        [
                            {
                                "type": "item",
                                "id": "1"
                            },
                            {
                                "type": "item",
                                "id": "2"
                            }
                        ],
                        [
                            {
                                "type": "item",
                                "id": "3"
                            }
                        ]
                    ]
                },
                {
                    "type": "item",
                    "id": "4"
                },
                {
                    "type": "item",
                    "id": "5"
                },
                {
                    "type": "item",
                    "id": "6"
                }
            ],
            "B": [
                {
                    "type": "item",
                    "id": 7
                },
                {
                    "type": "item",
                    "id": "8"
                },
                {
                    "type": "container",
                    "id": "2",
                    "columns": [
                        [
                            {
                                "type": "item",
                                "id": "9"
                            },
                            {
                                "type": "item",
                                "id": "10"
                            },
                            {
                                "type": "item",
                                "id": "11"
                            }
                        ],
                        [
                            {
                                "type": "item",
                                "id": "12"
                            },
                            {
                                "type": "container",
                                "id": "3",
                                "columns": [
                                    [
                                        {
                                            "type": "item",
                                            "id": "13"
                                        }
                                    ],
                                    [
                                        {
                                            "type": "item",
                                            "id": "14"
                                        }
                                    ]
                                ]
                            },
                            {
                                "type": "item",
                                "id": "15"
                            },
                            {
                                "type": "item",
                                "id": "16"
                            }
                        ]
                    ]
                },
                {
                    "type": "item",
                    "id": 16
                }
            ]
        }
    };

    $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

  });
