declare function create(o: object | null): void;

create({prop: 0});
create(null);

let someValue: any = 'this is a string';
let stringLength1: number = (<string>someValue).length;
let stringLength2: number = (someValue as string).length;
console.log(stringLength1, stringLength2);
