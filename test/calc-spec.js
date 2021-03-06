var calc = require('../src/calc.js')();
var assert = require('chai').assert;
var expect = require('chai').expect


describe('Calculator', function() {
   describe('#isNumeric', function() {
       it('should return false if a letter is provided', function() {
           assert.equal(false, calc.isNumeric('a'));
       });

       it('should return false if a mix characters and numbers is provided', function() {
           assert.equal(false, calc.isNumeric('10a'));
       });

       it('should return true if a number is provided', function() {
           assert.equal(true, calc.isNumeric(10));
       });

       it('should return true if a string with only a number is provided', function() {
           assert.equal(true, calc.isNumeric('10'));
       });

       it('should return true if a negative number is provided', function() {
           assert.equal(true, calc.isNumeric(-10));
       });

       it('should return true if a negative number is provided as a string', function() {
           assert.equal(true, calc.isNumeric('-10'));
       });
   });
    describe("#cleanInput", function() {
        it("should take a string and separate items", function() {
            var calcInput = calc.cleanInput('1 2 3 +');
            expect(calcInput).to.have.length(4);
        });
        it('should split all items by space', function() {
            var calcInput = calc.cleanInput('1ad 2 3 +');
            expect(calcInput[0]).to.equal('1ad');
        });
    });

    describe("#evaluate", function() {
        it("should take a string of values with + symbol and add", function() {
            var value = calc.evaluate('1 2 +');
            expect(value).to.equal(3);
        });
        it("should take a string of values with - symbol and subtract", function() {
            calc.reset();
            var value = calc.evaluate('10 0 3 + -');
            expect(value).to.equal(7);
        });
        it("should take a string of values with * symbol and multiply", function() {
            calc.reset();
            calc.evaluate('1 +')
            var value = calc.evaluate('3 *');

            expect(value).to.equal(3);
        });
        it("should take a string of values with / symbol and divide", function() {
            calc.reset();
            calc.evaluate('4 +')
            var value = calc.evaluate('2 /');

            expect(value).to.equal(2);
        });

        it("should take multiple values with the + symbol and add them correctly", function() {
            calc.reset();
            var value = calc.evaluate('1 2 3 5 + +');
            expect(value).to.equal(11);
        });

        it("should take multiple values with the - symbol and subtract them correctly", function() {
            calc.reset();
            var value = calc.evaluate('5 9 1 - -');
            expect(value).to.equal(-5);
        });

        it("should take multiple values with the * symbol and multiply them correctly", function() {
            calc.reset();
            var value = calc.evaluate('0 1 3 3 3 + * *');
            expect(value).to.equal(27);
        });

        it("should take multiple values with the / symbol and divide them correctly", function() {
            calc.reset();
            var value = calc.evaluate('10 3 2 / /');
            expect(value).to.equal(0.15);
        });

        it("should ignore bad values", function() {
            calc.reset();
            var value = calc.evaluate('10 3 a + +');
            expect(value).to.equal(13);
        });

        it("should ignore bad values in operators", function() {
            calc.reset();
            var value = calc.evaluate('10 3 a +a');
            expect(value).to.equal(0);
        });

        it("should work together with all operators", function() {
            calc.reset();
            expect(calc.evaluate('9 1 +')).to.equal(10);
            expect(calc.evaluate('10 /')).to.equal(1);
            expect(calc.evaluate('10 *')).to.equal(10);
            expect(calc.evaluate('2 -')).to.equal(8);
        });


    });
});