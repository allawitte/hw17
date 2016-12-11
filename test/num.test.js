var num = require('../src/number');
var assert = require('assert');
describe('Number', function () {
    it('should return 3', function(){
        var number = num;
        console.log('number is:', number.givNum());
        assert.equal(number.givNum(), 3);
    });
});
/**
 * Created by HP on 12/11/2016.
 */
