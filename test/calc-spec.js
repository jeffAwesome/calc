var calc = require('../src/calc.js')();
var assert = require('assert');

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
});