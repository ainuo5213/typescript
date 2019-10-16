"use strict";
// class Greeter {
//   public greeting: string;
//
//   constructor(message: string) {
//     this.greeting = message;
//   }
//
//   public greet() {
//     return 'Hello, ' + this.greeting;
//   }
// }
//
// let greeter: Greeter = new Greeter('world');
// greeter.greet();
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + " move " + distance + "m");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof! Woof!');
    };
    Dog.prototype.move = function (distance) {
        if (distance === void 0) { distance = 5; }
        console.log("barking");
        _super.prototype.move.call(this, distance);
    };
    return Dog;
}(Animal));
var dog = new Dog('来福');
dog.bark();
dog.move(5);
