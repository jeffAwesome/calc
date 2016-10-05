var calc = require('../src/calc.js')();
var assert = require('chai').assert;
var expect = require('chai').expect

/*describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
}); */

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
            calc.evaluate('0 *');
            calc.evaluate('10 +');
            var value = calc.evaluate('3 -');

            expect(value).to.equal(7);
        });
        it("should take a string of values with * symbol and multiply", function() {
            calc.evaluate('0 *');
            calc.evaluate('1 +')
            var value = calc.evaluate('3 *');

            expect(value).to.equal(3);
        });
        it("should take a string of values with / symbol and divide", function() {
            calc.evaluate('0 *');
            calc.evaluate('4 +')
            var value = calc.evaluate('2 /');

            expect(value).to.equal(2);
        });
    });
});