//Array Operations
//Head
var headArray = [10, 20, 30, 40, 50];
var head = function (arr) {
    var first = arr[0];
    return first;
};
console.log('Array operations exercise, head part');
console.log("Here is whole array ".concat(headArray));
console.log("Here is the first element: ".concat(head(headArray)));
