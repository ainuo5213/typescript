"use strict";
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var genericNumber = new GenericNumber();
genericNumber.zeroValue = 0;
genericNumber.add = function (x, y) {
    return x + y;
};
console.log(genericNumber.add(1, 2));
var genericString = new GenericNumber();
genericString.zeroValue = '0';
genericString.add = function (x, y) {
    return x + y;
};
console.log(genericString.add('1', '2'));
