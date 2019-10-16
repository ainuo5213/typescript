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
var square = {
    color: '#fff',
    sideLength: 0,
    penWidth: 1
};
function getCounter() {
    function counter(start) {
        return start + '5';
    }
    counter.interval = 123;
    counter.reset = function () {
        console.log('this is counter');
    };
    return counter;
}
var counter = getCounter();
counter.reset();
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () {
        console.log(';asd');
    };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () {
        console.log('select');
    };
    return TextBox;
}(Control));
var ImageC = /** @class */ (function (_super) {
    __extends(ImageC, _super);
    function ImageC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageC.prototype.select = function () {
        console.log('asd');
    };
    return ImageC;
}(Control));
