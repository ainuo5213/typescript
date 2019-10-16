// class Greeter {
//   public greeting: string;
//
//   constructor(message: string) {
//     this.greeting = message;
//   }
//
//   public greet() {
//     return 'Hello, ' + this.greeting;
//   }
// }
//
// let greeter: Greeter = new Greeter('world');
// greeter.greet();

class Animal {

  constructor(public name: string) {
    this.name = name;
  }

  public move(distance: number = 0): void {
    console.log(`${this.name} move ${distance}m`)
  }
}

class Dog extends Animal {

  constructor(name: string) {
    super(name);
  }

  public bark(): void {
    console.log('Woof! Woof!')
  }

  public move(distance: number = 5) {
    console.log(`barking`);
    super.move(distance);
  }
}

let dog: Dog = new Dog('来福');
dog.bark();
dog.move(5);
