var Maxsum = require("../src/js/maximumsum.js");

describe('Should return the maximum subarray for an array', function () {
    var maxsum = new Maxsum();

    it('1 - should return sum of array as 27', function() {
        var sample = [-4, 5, 7, -2, 0, 5, 12];
        expect(27).toEqual(maxsum.sumArrayN2(sample));
    });

    it('2 - should return sum of array as 35', function() {
        var sample = [-4, 5, 7, -2, 0, 13, 12];
        expect(35).toEqual(maxsum.sumArrayN2(sample));
    });

    it('3 - should', function() {
        var examples = [
            [[], 0],
            [[1], 1],
            [[1,2], 3],
            [[-1,2], 2],
            [[2,-1], 2],
            [[5,-1,4], 8],
            [[0,1,1,-1,0,1], 2],
            [[1,2,3,0,-6,1,2], 6],
            [[1,2,3,0,-8,1,2,4], 7],
            [[-2,1,2,3,0,-5,1,2,4], 8],
            [[-2,1,-3,4,-1,2,1,-5,4], 6],
            [[-1,-1,2,-1,2,-1,2,-1,-1], 4],
        ];
        for(var i = 0; i < examples.length; i++) {
            var testCase = examples[i];
            var sample = testCase[0];
            var expected = testCase[1];
            expect(expected).toEqual(maxsum.sumArrayN2(sample));
        }
    });

    it('4 - should return max sub array for linear function', function() {
        var examples = [
            [[], 0],
            [[1], 1],
            [[1,2], 3],
            [[-1,2], 2],
            [[2,-1], 2],
            [[5,-1,4], 8],
            [[0,1,1,-1,0,1], 2],
            [[1,2,3,0,-6,1,2], 6],
            [[1,2,3,0,-8,1,2,4], 7],
            [[-2,1,2,3,0,-5,1,2,4], 8],
            [[-2,1,-3,4,-1,2,1,-5,4], 6],
            [[-1,-1,2,-1,2,-1,2,-1,-1], 4],
        ];
        for(var i = 0; i < examples.length; i++) {
            var testCase = examples[i];
            var sample = testCase[0];
            var expected = testCase[1];
            expect(expected).toEqual(maxsum.sumArrayLinear(sample));
        }
    });

    it('5 - should return 3 for linear', function() {
        var expected = 3;
        var sample = [1, 2];

        expect(expected).toEqual(maxsum.sumArrayLinear(sample));
    });

    it('6 - should return 7 for linear', function() {
        var expected = 7;
        var sample = [-3, 5, 1, -1, 2];

        expect(expected).toEqual(maxsum.sumArrayLinear(sample));
    });


});
