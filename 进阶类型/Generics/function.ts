function identity<T>(arg: T): T {
  return arg
}

function log<U>(arg: U[]): U {
  console.log(arg.length);
  return arg[0]
}

let res: number = identity<number>(5);
console.log(res);
let myIdentity: <T>(arg: T) => T = identity;

interface Generic<T> {
  <T>(arg: T): T;
}

let myIdentity2: Generic<number> = identity;
