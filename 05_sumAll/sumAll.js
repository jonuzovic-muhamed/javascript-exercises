const sumAll = function(lowerBorder, upperBorder) {
    if (!Number.isInteger(lowerBorder) || !Number.isInteger(upperBorder)) {
        return 'ERROR';
    }

    if (lowerBorder < 0 || upperBorder < 0) {
        return 'ERROR';
    }

    if (upperBorder < lowerBorder) {
        let temp = lowerBorder;
        lowerBorder = upperBorder;
        upperBorder = temp;
    }

    let sum = 0;
    for(let i = lowerBorder ; i <= upperBorder ; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
