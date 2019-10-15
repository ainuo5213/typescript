"use strict";
function greeter(person) {
    return 'Hello ' + person.firstName + person.lastName;
}
var user = {
    firstName: 'sun',
    lastName: 'yonggang'
};
console.log(greeter(user));
