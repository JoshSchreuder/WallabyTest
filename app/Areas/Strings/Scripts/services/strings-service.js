(function () {
    'use strict';

    angular.module('stringsApp').service('StringService', function () {
        return {
            join: function (s1, s2) {
                return s1 + s2;
            },
            repeat: function (s, num) {
                return Array(num + 1).join(s);
            },
            reverse: function (s) {
                return s.split("").reverse().join("");
            }
        };
    });
})();
