//Array Operations
//Init
var initArray = [10, 20, 30, 40, 50];
var init = function (arr) {
    arr.pop();
    return arr;
};
console.log('Array operations exercise, init part');
console.log("Here is whole array ".concat(initArray));
console.log("Here are the array unless last element: ".concat(init(initArray)));
