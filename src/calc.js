module.exports = function() {
    var calc = {
        currTotal: 0,
        operation: {
            "+": function(inputs) {
                inputs.forEach(function(x) {
                    calc.currTotal += x;
                });
                return calc.currTotal;
            },
            "-": function(inputs) {
                inputs.forEach(function(x) {
                    calc.currTotal -= x;
                });
                return calc.currTotal;
            },
            "/": function(inputs) {
                inputs.forEach(function(x) {
                    calc.currTotal /= x;
                });
                return calc.currTotal;
            },
            "*": function(inputs) {
                inputs.forEach(function(x) {
                    calc.currTotal *= x;
                });
                return calc.currTotal;
            }
        },
        isNumeric: function(input) {
            return !isNaN(parseFloat(input)) && isFinite(input);
        },
        evaluate: function(input) {
            var cleanInput = input.split("\n");
            var expression = cleanInput[0].split(" ");
            var operands = [];

            expression.forEach(function(x) {
                if (calc.isNumeric(x)) {
                    operands.push(parseFloat(x));
                } else {
                    if (x == "-" || x == "/" || x == "*" || x == "+") {
                        calc.operation[x](operands);
                    }
                }
            });

            return calc.currTotal;
        }

    };
    return calc;
};