const convertToCelsius = function(tempInFahrenheit) {
  return Math.round(((tempInFahrenheit - 32) / 1.8) * 10) / 10;
};

const convertToFahrenheit = function(tempInCelsius) {
  return Math.round(((tempInCelsius * 1.8) + 32).toFixed(1) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
