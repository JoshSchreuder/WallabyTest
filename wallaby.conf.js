module.exports = function () {
    'use strict';
    return {
        files: [
            // App Dependencies
            { "pattern": 'app/Scripts/es5-shim.min.js', "instrument": false },
            { "pattern": 'app/Scripts/jquery-2.0.3.min.js', "instrument": false },
            { "pattern": 'app/Scripts/jquery-ui-1.11.4.min.js', "instrument": false },
            { "pattern": 'app/Scripts/attrchange.js', "instrument": false },
            { "pattern": 'app/Scripts/lib/angular/angular.js', "instrument": false },
            { "pattern": 'app/Scripts/lib/angular/angular-route.js', "instrument": false },
            { "pattern": 'app/Scripts/lib/angular/angular-resource.js', "instrument": false },
            { "pattern": 'app/Scripts/lib/angular/angular-sanitize.js', "instrument": false },
            { "pattern": 'app/Scripts/lib/angular/angular-animate.js', "instrument": false },
            { "pattern": 'app/Scripts/lib/angular/angular-aria.js', "instrument": false },
            { "pattern": 'app/Scripts/lib/angular/grid/ng-grid.js', "instrument": false },
            { "pattern": 'app/Scripts/angular-file-upload.js', "instrument": false },
            { "pattern": 'app/Scripts/myapp/angular/ui-bootstrap/ui-bootstrap-tpls-0.14.3.min.js', "instrument": false },
            { "pattern": 'app/Scripts/bootstrap-3.2.0/bootstrap.min.js', "instrument": false },
            { "pattern": 'app/Scripts/moment.js', "instrument": false },
            { "pattern": 'app/Scripts/underscore.js', "instrument": false },
            { "pattern": 'app/Scripts/big.js', "instrument": false },
            { "pattern": 'app/Scripts/jquery.inputmask/jquery.inputmask-3.0.2.js', "instrument": false },
            { "pattern": 'app/Scripts/select2/ui-select2.js', "instrument": false },
            { "pattern": 'app/Scripts/select2/select2.min.js', "instrument": false },
            { "pattern": 'app/Scripts/bootstrap-datepicker/js/bootstrap-datepicker.min.js', "instrument": false },
            { "pattern": 'app/Scripts/ui-sortable-0.13.4.min.js', "instrument": false },

            // App Code
            'app/Areas/**/Scripts/**/*app.js',
            'app/Areas/**/Scripts/**/*.js',
            'app/Scripts/MyCompany/**/*.js',
            { "pattern": 'app/**/Templates/**/*.html', "instrument": false },
            'app/Scripts/Report/*.js',

            // Test Dependencies
            { "pattern": 'app/Scripts/lib/angular/angular-mocks.js', "instrument": false },
            { "pattern": 'test/Scripts/jasmine-jquery.js', "instrument": false },

            // Test Fixtures
            { "pattern": 'test/Mocks/*.js', "instrument": false },
            { "pattern": 'test/Areas/**/*.mock.js', "instrument": false },
            { "pattern": 'test/Mocks/**/*.html', "instrument": false, "load": true },
            { "pattern": 'test/Mocks/**/*.json', "instrument": false, "load": false }
        ],
        tests: [
            'test/Areas/**/*-spec.js',
            'test/Scripts/**/*-spec.js'
        ],
        debug: true
    };
};
