module.exports = function () {
    'use strict';
    return {
        files: [
            // Library deps
            { pattern: 'app/lib/angular.js', instrument: false },

            // Test deps
            { pattern: 'test/lib/angular-mocks.js', instrument: false },

            // Our code
            'app/calc.js'
        ],
        tests: [
            'test/test/calc-spec.js'
        ],
        debug: true
    };
};
