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
var function1 = function (a) { return Math.pow(a, 2); };
var test_1 = [8.5, 7.9, 3.1];
var test_2 = [4, 7, 8];
console.log(exeOperation.apply(void 0, [undefined].concat(test_1)));
console.log(exeOperation.apply(void 0, [function1].concat(test_2)));
