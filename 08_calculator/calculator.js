const add = function(numberOne, numberTwo) {
  return numberOne + numberTwo;
};

const subtract = function(numberOne, numberTwo) {
  return numberOne - numberTwo;
};

const sum = function(array) {
  let total = 0;
  for(let i = 0; i < array.length; i++) {
      total = total + array[i];
  }
  return total;
};

const multiply = function(array) {
  let total = 1;
  for(let i = 0; i < array.length; i++) {
      total = total * array[i];
  }
  return total;
};

const power = function(numberOne, numberTwo) {
  return numberOne ** numberTwo;
};

const factorial = function(number) {
  let factorial = 1;
  for (let i = number; i > 1; i--) {
      factorial = factorial * i;
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
