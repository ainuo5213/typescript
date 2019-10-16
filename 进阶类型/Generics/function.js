"use strict";
function identity(arg) {
    return arg;
}
function log(arg) {
    console.log(arg.length);
    return arg[0];
}
var res = identity(5);
console.log(res);
var myIdentity = identity;
var myIdentity2 = identity;
