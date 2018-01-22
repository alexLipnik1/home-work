"use strict";
function exeOperation(func) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var sum = 0;
    if (!func)
        func = Math.floor;
    for (var i = 0; i < rest.length; i++)
        sum += func(rest[i]);
    return sum;
}
var pow = function (a) { return Math.pow(a, 2); };
var defualt_test = [8.5, 7.9, 3.1];
var pow_test = [4, 7, 8];
console.log(exeOperation.apply(void 0, [undefined].concat(defualt_test)));
console.log(exeOperation.apply(void 0, [pow].concat(pow_test)));
