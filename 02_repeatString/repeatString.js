const repeatString = function(string, num) {
let i = num;
let output = "";
if (num<0) {
    return "ERROR";
}
for (;i>0;i--) {
    output += string;
}
return output;
};

// Do not edit below this line
module.exports = repeatString;
