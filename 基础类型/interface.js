"use strict";
function printLabel(labelObj) {
    console.log(labelObj.label);
}
var label = {
    size: 10,
    label: 'Size 10 Object'
};
printLabel(label);
function createSquare(config) {
    var newSquare = {
        color: 'white',
        area: 100,
        colour: '#fff'
    };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = Math.pow(config.width, 2);
    }
    return newSquare;
}
var point = {
    x: 10,
    y: 20
};
var number = [1, 2, 3, 4, 5, 6];
var ro = number;
console.log(ro);
var search = function (source, subString) {
    return source + subString;
};
var myArray = ['asd'];
var str = myArray[0];
