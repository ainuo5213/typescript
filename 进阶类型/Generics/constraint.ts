interface Length {
  length: number;
}

// 泛型约束 1
function identity<T extends Length>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// 泛型约束 2
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

getProperty({length: 0, x: 1}, "x");

// 泛型约束 3
function create<T>(constructor: { new(): T }): T {
  return new constructor();
}

class People {
}

let people: People = create<People>(People);

class BeeKeeper {
  public hasMask!: boolean;
}

class LionKeeper {
  public nametaa!: string
}

class Animal {
  public numLengs!: number;
}

class Bee extends Animal {
  public keeper!: BeeKeeper
}

class Lion extends Animal {
  public keeper!: LionKeeper
}

function createInstance<T extends Animal>(constructor: new() => T): T {
  return new constructor();
}
class Horse {

}
// error
// createInstance(Horse);
console.log(createInstance(Lion).keeper);
console.log(createInstance(Bee).keeper.hasMask);

