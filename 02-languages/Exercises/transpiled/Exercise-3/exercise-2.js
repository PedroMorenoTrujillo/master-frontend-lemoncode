//CLONE MERGE
// Merge
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var sourceObj = { name: "Maria", surname: "Ibañez", country: "SPA" };
var targetObj = { name: "Luisa", age: 31, married: true };
var merge = function (source, target) {
    return __assign(__assign({}, target), source);
};
console.log("Clone Merge exercise, merge part");
console.log("Here is the source object: ", sourceObj);
console.log("Here is the cloned object: ", merge(sourceObj, targetObj));
