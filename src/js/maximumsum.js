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

    this.sumArrayLinear = function(value) {
        if(value.length === 0) {
            return 0;
        }
        var sum = value[0];
        var max = sum;
        for(var i = 1; i < value.length; i++) {
            sum = Math.max(value[i], sum + value[i]);
            max = Math.max(max, sum);
        }
        return max;
    }
}

module.exports = Maxsum;
