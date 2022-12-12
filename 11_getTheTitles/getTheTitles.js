const getTheTitles = function(array) {
    let list = [];
    for (let i = 0; i < array.length; i++) {
        list.push(array[i].title);
    }
    return list;
};

// Do not edit below this line
module.exports = getTheTitles;
