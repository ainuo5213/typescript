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
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name: ' + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(name) {
        if (name === void 0) { name = 'Bob'; }
        return _super.call(this, name) || this;
    }
    AccountingDepartment.say = function () {
        console.log('this is say func');
    };
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('meeting');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports...');
    };
    return AccountingDepartment;
}(Department));
// : Constructor 得到的是取实例属性
var department = new AccountingDepartment();
department.printName();
department.printMeeting();
department.generateReports();
// typeof Constructor得到的就不是取实例属性而是静态属性
var room = AccountingDepartment;
room.say();
