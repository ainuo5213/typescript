"use strict";
var passcode = 'secret passcode';
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this._fullname;
        },
        set: function (name) {
            if (passcode && passcode === 'secret passcode') {
                this._fullname = name;
            }
            else {
                console.log('Error: Unauthorized update');
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person();
person.fullName = 'Bob';
if (person.fullName) {
    console.log(person.fullName);
}
var Grid = /** @class */ (function () {
    function Grid(point) {
        var disX = point.x - Grid.origin.x;
        var disY = point.y - Grid.origin.y;
        this.calculateSquare(disX, disY);
    }
    Grid.prototype.calculateSquare = function (disX, disY) {
        this.square = disX * disY / 2;
        console.log(this.square);
    };
    Grid.origin = {
        x: 0,
        y: 0
    };
    return Grid;
}());
var grid = new Grid({ x: 10, y: 20 });
