# calc
Experimenting with different implementations of RPN Calculator.
The javascript implementation of the project had the following problems, I tried to solve with this.
It needed to be able to run consistently on the command line until it was given the 'q' command.
It needed to be flexible enough to ignore bad inputs without crashing.

The javascript version is ran on node. I wanted to use es6, but haven't gotten to dig
deep into that yet. Future versions may move to es6.

The test is ran on mocha, with the chai assertion library. This is primarily what i've used in the
past, outside of the angular world.

# Todos
    * Allow operands without operators on a single line. This would allow you to enter
    3 and it would show that on the next line waiting for another number or an operator.
    This is something I would on no future iterations.

    * Create Ruby Version
    * Create Python Version

# Calculator
    * To start the calculator just type in the console 'node calc.js'
    * To close out the calculator type 'q' and enter.
 # Usage
    * To use the calculator you must start by entering at least one number followed by +, -, *, /.
    * You must provide an operator after each use for the new number to be included in an operation.
    * There is no limit to how many digits you can provide on a single line.
    * Each separate number must be separated by a space.

# Examples:
    * 1 1 +
    * 10 3 -
    * 10 3 *
    * 10 2 /

# Test Suite
To run the test suite run mocha test/calc-spec.js.
