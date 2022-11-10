const removeFromArray = function(array, ...Removals) {
    for (i=0; i<Removals.length; i++) {
        for (j=0; j<array.length; j++) {
            if (array[j] === Removals[i]) {
                array.splice([j],1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
