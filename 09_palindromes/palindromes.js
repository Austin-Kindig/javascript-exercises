const palindromes = function (string) {
    const originalString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedString = [];

    for(let i = originalString.length - 1; i >= 0; i--) {
        reversedString.push(originalString[i]);
    }
    
    if(reversedString.join('') === originalString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
