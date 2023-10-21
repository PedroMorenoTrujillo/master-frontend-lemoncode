//Concat
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var firstConcatArray = [10, 20];
var secondConcatArray = [30, 40];
var concat = function (first, second) {
    return __spreadArray(__spreadArray([], first, true), second, true);
};
console.log("Concat exercise, first part");
console.log("Here are whole arrays: first array ".concat(firstConcatArray, ", second array: ").concat(secondConcatArray));
console.log("Here are the concat array: ".concat(concat(firstConcatArray, secondConcatArray)));
var thirdConcatArray = [50, 60];
var fourthConcatArray = [70, 80];
var concatMultiple = function () {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    return __spreadArray([], arrays.reduce(function (acc, arr) { return __spreadArray(__spreadArray([], acc, true), arr, true); }, []), true);
};
console.log("Concat exercise, optional part");
console.log("Here are the other arrays: third array ".concat(thirdConcatArray, ", fourth array: ").concat(fourthConcatArray));
console.log("Here are the concat multiple array: ".concat(concatMultiple(firstConcatArray, secondConcatArray, thirdConcatArray, fourthConcatArray)));
