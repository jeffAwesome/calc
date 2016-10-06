/**
 * Created by jeffreyrichardson on 10/6/16.
 */
module.exports = function() {
    'use strict';
    var calc = {
        currTotal: 0,
        operation: {
            "+": function(inputs) {
                var result = 0;
                var result = inputs.reduce(function(previousValue, currentValue, currentIndex, array) {
                    return currentValue + previousValue;
                });
                calc.currTotal += result;
                return calc.currTotal;
            },
            "-": function(inputs) {
                var result = 0;
                var result = inputs.reduce(function(previousValue, currentValue, currentIndex, array) {
                    return currentValue - previousValue;
                });
                calc.currTotal -= result;
                return calc.currTotal;
            },
            "/": function(inputs) {
                var currTotal = 0;
                 inputs.forEach(function(x) {
                    if (currTotal === 0) {
                        currTotal = x;
                    } else {
                        currTotal /= x;
                    }
                });
                if (calc.currTotal === 0) {
                    calc.currTotal = 1;
                }
                calc.currTotal /= currTotal;
                return calc.currTotal;
            },
            "*": function(inputs) {
                inputs.unshift(1);
                var result = inputs.reduce(function(previousValue, currentValue, currentIndex, array) {
                    return previousValue * currentValue;
                });
                calc.currTotal *= result;
                return calc.currTotal;
            }
        },
        isNumeric: function(input) {
            return !isNaN(parseFloat(input)) && isFinite(input);
        },
        cleanInput: function(input) {
            var cleanInput = input.split("\n");
            return cleanInput[0].split(" ");
        },
        validOperands: function(inputs) {
            var operands;
           if (Array.isArray(inputs)) {
              operands = inputs.filter(function(item) {
                   if (calc.isNumeric(item)) {
                       return item;
                   }
               });
               return operands;
           }
        },
        reset: function() {
            calc.currTotal = 0;
        },
        evaluate: function(input) {
            var expression = calc.cleanInput(input);
            var evaluation = [];

            if (expression.length > 0) {
                expression.forEach(function(x) {
                    if (calc.isNumeric(x)) {
                        evaluation.push(parseFloat(x));
                    } else {
                        if (x == "-" || x == "/" || x == "*" || x == "+") {
                            var operanda = evaluation.shift();
                            var operandb = evaluation.shift();
                            var operands = calc.validOperands([operanda, operandb]);
                            if (operands.length > 0) {
                                calc.operation[x](operands);
                            }
                        }
                    }
                });
            }

            return calc.currTotal;
        }

    };
    return calc;
};