const add = function(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const sum = function(array) {
	let sum = 0;
  for (number of array) {
    sum += number;
  }
  return sum;
};

const multiply = function(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
};

const power = function(firstNumber, secondNumber) {
	return Math.pow(firstNumber, secondNumber);
};

const factorial = function(number) {

  let factorial = 1;

  for(let i = 2 ; i <= number ; i++) {
    factorial *= i;
  }
    
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
