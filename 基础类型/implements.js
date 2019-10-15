"use strict";
function createClock(constructor, hour, minute) {
    return new constructor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(hour, minute) {
        console.log(hour, minute);
    }
    DigitalClock.sum = function (a, b) {
        return a + b;
    };
    DigitalClock.prototype.tick = function () {
        console.log('tick tick');
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(hour, minute) {
        console.log(hour, minute);
    }
    AnalogClock.sum = function (a, b) {
        return a + b + 10;
    };
    AnalogClock.prototype.tick = function () {
        console.log('beep beep');
    };
    return AnalogClock;
}());
var digitalClock = createClock(DigitalClock, 5, 5);
var analogClock = createClock(AnalogClock, 5, 5);
digitalClock.tick();
analogClock.tick();
console.log(DigitalClock.sum(1, 2));
console.log(AnalogClock.sum(2, 5));
// class Clock implements  ClockConstructor {
//   // @ts-ignore
//   public currentTime: Date;
//
//   constructor(hour: number, minute: number) {
//     console.log(hour, minute)
//   }
//
//   public setTime(date: Date): void {
//     this.currentTime = date;
//   }
// }
