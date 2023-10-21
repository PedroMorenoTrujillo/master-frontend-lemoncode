//Array Operations
//Last
var lastArray = [10, 20, 30, 40, 50];
var last = function (arr) {
    return arr.pop();
};
console.log('Array operations exercise, last part');
console.log("Here is whole array ".concat(lastArray));
console.log("Here are the array unless last element: ".concat(last(lastArray)));
