const Maxsum = function() {
    this.sumArrayN2 = function(value) {
        var sum = 0;
        var max = 0;
        for(var i = 0; i < value.length; i++) {
            sum = 0;
            for(var j = i; j < value.length; j++) {
                sum += value[j];
                if(max < sum) {
                    max = sum;
                }
            }

        }
        return max;
    }
}

module.exports = Maxsum;
