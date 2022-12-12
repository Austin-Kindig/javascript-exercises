const findTheOldest = function(array) {
    const oldest = array.sort(function(first, second) {
        if (first.yearOfDeath == undefined) {
            first.yearOfDeath = new Date().getFullYear();
        }
        if (second.yearOfDeath == undefined) {
            second.yearOfDeath = new Date().getFullYear();
        }
        const firstPerson = first.yearOfDeath - first.yearOfBirth;
        const secondPerson = second.yearOfDeath - second.yearOfBirth;
        return firstPerson > secondPerson ? -1 : 1;
    })
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
