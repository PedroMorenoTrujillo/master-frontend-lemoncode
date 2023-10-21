//Array Operations
//Tail
var tailArray = [10, 20, 30, 40, 50];
var tail = function (arr) {
    var args = arr.slice(1);
    return args;
};
console.log('Array operations exercise, tail part');
console.log("Here is whole array ".concat(tailArray));
console.log("Here are the rest elements: ".concat(tail(tailArray)));
