(function () {
    'use strict';

    angular.module('myApp', []).service('CalculatorService', function () {
        return {
            add: function (x, y) {
                return x + y;
            },
            subtract: function (x, y) {
                return x - y;
            },
            multiply: function (x, y) {
                return x * y;
            },
            divide: function (x, y) {
                return x / y;
            }
        };
    });
})();
