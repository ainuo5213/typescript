function padLeft(value, padding) {
    if ('number' === typeof padding) {
        return Array(padding + 1).join(' ') + value;
    }
    if ('string' === typeof padding) {
        return padding + value;
    }
    throw Error('Expected string or number, got' + padding);
}
padLeft('Hello world', 4);
function getSmallPet() {
    var pet = {
        swim: function () {
        },
        layEggs: function () {
        }
    };
    return pet;
}
var pet = getSmallPet();
// layEggs is ok, cause layEggs exist in both Fish and Bird
pet.layEggs();
// swim not, cause bird cannot swim
// pet.swim()
// 类型谓词
function isFish(pet) {
    return pet.swim !== undefined;
}
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
function isNumber(x) {
    return typeof x === "number";
}
function isString(x) {
    return typeof x === 'string';
}
function padLeft2(value, padding) {
    if (isNumber(padding)) {
        return Array(padding + 1).join(' ') + value;
    }
    else if (isString(padding)) {
        return Array(padding + 1).join(' ') + value;
    }
    throw Error('Expected string or number, got' + padding);
}
