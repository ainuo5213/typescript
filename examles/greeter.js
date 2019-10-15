"use strict";
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName + this.lastName;
    }
    return User;
}());
function greeter(person) {
    return 'Hello ' + person.firstName + person.lastName;
}
// 由于User类含有firstname和lastname，所以能够和接口完美兼容
var user = new User('sun', 'yonggang');
console.log(greeter(user));
