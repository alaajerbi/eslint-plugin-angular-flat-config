module.exports = function(context) {

    'use strict';

    var utils = require('./utils/utils');

    return {

        'CallExpression': function(node) {

            var prefix = context.options[0],
                convertedPrefix; // convert string from JSON .eslintrc to regex

            if(prefix === undefined) {
                return;
            }

            convertedPrefix = utils.convertPrefixToRegex(prefix);

            if (utils.isAngularDirectiveDeclaration(node)) {
                var name = node.arguments[0].value;

                if(name !== undefined && name.indexOf('ng') === 0){
                    context.report(node, 'The {{directive}} directive should not start with "ng". This is reserved for AngularJS directives', {
                        directive: name
                    });
                } else if(name !== undefined && !convertedPrefix.test(name)){
                    if(typeof prefix === 'string' && !utils.isStringRegexp(prefix)){
                        context.report(node, 'The {{directive}} directive should be prefixed by {{prefix}}', {
                            directive: name,
                            prefix: prefix
                        });
                    } else {
                        context.report(node, 'The {{directive}} directive should follow this pattern: {{prefix}}', {
                            directive: name,
                            prefix: prefix.toString()
                        });
                    }
                }
            }
        }
    };

};

module.exports.schema = [
    // JSON Schema for rule options goes here
];
