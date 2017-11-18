var Popcount = require("../src/js/popcount.js")

describe('Convert int to binary', function () {
    var popcount = new Popcount();
    it('1 - should count number of 1\'s', function() {
        var result = popcount.countBinary(3);
        expect(result == 3)
    });
});
