"use strict";
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
// 泛型约束 1
function identity(arg) {
    console.log(arg.length);
    return arg;
}
// 泛型约束 2
function getProperty(obj, key) {
    return obj[key];
}
getProperty({ length: 0, x: 1 }, "x");
// 泛型约束 3
function create(constructor) {
    return new constructor();
}
var People = /** @class */ (function () {
    function People() {
    }
    return People;
}());
var people = create(People);
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var LionKeeper = /** @class */ (function () {
    function LionKeeper() {
    }
    return LionKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal));
function createInstance(constructor) {
    return new constructor();
}
var Horse = /** @class */ (function () {
    function Horse() {
    }
    return Horse;
}());
// error
// createInstance(Horse);
console.log(createInstance(Lion).keeper);
console.log(createInstance(Bee).keeper.hasMask);
