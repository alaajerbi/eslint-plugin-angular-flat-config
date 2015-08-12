//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../rules/ng_module_setter'),
    RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new RuleTester();
eslintTester.run('ng_module_setter', rule, {
    valid: [
        'angular.module("module", []);'
    ],
    invalid: [{
            code: 'var app = angular.module("module", []);',
            errors: [{ message: 'Declare modules without a variable using the setter syntax.'}]
        }, {
            code: 'let app = angular.module("module", []);',
            errors: [{ message: 'Declare modules without a variable using the setter syntax.'}]
        }, {
            code: 'const app = angular.module("module", []);',
            errors: [{ message: 'Declare modules without a variable using the setter syntax.'}]
        }, {
            code: 'app = angular.module("module", []);',
            errors: [{ message: 'Declare modules without a variable using the setter syntax.'}]
        }
    ]
});
