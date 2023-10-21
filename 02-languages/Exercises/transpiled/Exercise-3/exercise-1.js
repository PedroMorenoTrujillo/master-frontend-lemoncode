//CLONE MERGE
// Clone
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
var sourceObject = {
    name: "Maria",
    surname: "Ibañez",
    country: "SPA",
};
function clone(source) {
    return __assign({}, source);
}
console.log("Clone Merge exercise, clone part");
console.log("Here is the source object: ", sourceObject);
console.log("Here is the cloned object: ", clone(sourceObject));
