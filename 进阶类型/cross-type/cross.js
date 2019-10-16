"use strict";
function extend(first, second) {
    var res = Object.assign({}, first, second);
    return res;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
        console.log('sad');
    };
    return ConsoleLogger;
}());
var person = extend(new ConsoleLogger(), new Person('jim'));
console.log(person);
