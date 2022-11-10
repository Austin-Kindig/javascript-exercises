const reverseString = function(text) {
const OldText = Array.from(text);
const NewText = [];
 for (letter of OldText) {
    NewText.unshift(letter);
 }
 let output = NewText.join("");
 return output;
};

// Do not edit below this line
module.exports = reverseString;
