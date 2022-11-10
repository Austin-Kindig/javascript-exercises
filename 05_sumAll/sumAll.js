const sumAll = function(num1, num2) {
if (typeof(num1 + num2) != "number" || num1 < 0 || num2 < 0) {
    return "ERROR";
} 
if (num1 === num2) {
    return num1;
}
let LowNum = 0;
let HighNum = 0; 
if (num1 > num2) {
   HighNum = num1;
   LowNum = num2;
} else {
   HighNum = num2;
   LowNum = num1;
}
let sum = 0;
while (LowNum <= HighNum) {
    sum = sum + LowNum;
    LowNum++;
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
