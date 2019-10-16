function extend<T, U>(first: T, second: U): T & U {
  let res = Object.assign({}, first, second);
  return res;
}

class Person {
  public name !: string;

  constructor(name: string,) {
    this.name = name;
  }
}

interface Loggable {
  log(): void;
}

class ConsoleLogger implements Loggable {
  public log(): void {
    console.log('sad')
  }
}

let person = extend(new ConsoleLogger(), new Person('jim'));

console.log(person);
