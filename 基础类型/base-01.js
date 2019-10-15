"use strict";
var isDone = false;
// 十进制
var decLiteral = 20;
// 十六进制
var hexLiteral = 0x14;
// 二进制
var binaryLiteral = 20;
// 八进制
var octalliteral = 20;
var username = 'bob';
var age = 21;
var sensentence = "Hello, my name is " + username + ", I'll be " + age + " next month";
console.log(sensentence);
var numberList = [1, 2, 3, 4];
// let stringList: Array<string> = ['1', '2', '3'];
var tuple = ['1', 2];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var color = Color.Green;
var colorName = Color[2];
console.log(colorName);
var notSure = 4;
notSure = 'maybe a string instead';
notSure = true;
function error(message) {
    throw new Error("this is error massage: " + message);
}
function failed() {
    return error('something failed');
}
function infiniteLoop() {
    while (true) {
        console.log('asd');
    }
}
