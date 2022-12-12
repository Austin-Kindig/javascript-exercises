const fibonacci = function(index) {
    if (index < 0) {
        return "OOPS";
    }
    const fibonacciSequence = [1,1];
    for (let i = 1; i < index; i++) {
        fibonacciSequence.push(fibonacciSequence[i] + fibonacciSequence[i - 1]);
    }
    return fibonacciSequence[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;
