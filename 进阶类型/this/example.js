"use strict";
var Handler = /** @class */ (function () {
    function Handler(type) {
        var _this = this;
        // 使用箭头函数解决添加handler时this指向的问题
        this.onClickBad = function (e) {
            _this.type = e.type;
            console.log(_this.type);
        };
        this.type = type;
    }
    return Handler;
}());
var clickHandler = new Handler('click');
var uiElement = {
    addClickListener: function (eventType, eventListener) {
    }
};
uiElement.addClickListener(clickHandler.type, clickHandler.onClickBad);
