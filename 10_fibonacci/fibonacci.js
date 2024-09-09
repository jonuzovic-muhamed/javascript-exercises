const fibonacci = function(number) {

    if (typeof number !== 'number') {
        number = parseInt(number)
    } else {
        number = number
    }

    if (number <= 1) return number;
    return fibonacci(number - 1) + fibonacci(number - 2);
};

module.exports = fibonacci;
 