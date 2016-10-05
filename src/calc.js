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
        cleanInput: function(input) {
            var cleanInput = input.split("\n");
            return cleanInput[0].split(" ");
        },
        reset: function() {
          calc.currTotal = 0;
        },
        evaluate: function(input) {
            var expression = calc.cleanInput(input);
            var operands = [];

            if (expression.length > 0) {
                expression.forEach(function(x) {
                    if (calc.isNumeric(x)) {
                        operands.push(parseFloat(x));
                    } else {
                        if (x == "-" || x == "/" || x == "*" || x == "+") {
                            calc.operation[x](operands);
                        }
                    }
                });
            }

            return calc.currTotal;
        }

    };
    return calc;
};