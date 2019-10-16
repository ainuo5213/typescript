let passcode: string = 'secret passcode';

class Person {
  // @ts-ignore
  private _fullname: string;

  get fullName(): string {
    return this._fullname
  }

  set fullName(name: string) {
    if (passcode && passcode === 'secret passcode') {
      this._fullname = name;
    } else {
      console.log('Error: Unauthorized update')
    }
  }
}

let person: Person = new Person();
person.fullName = 'Bob';
if (person.fullName) {
  console.log(person.fullName)
}

interface Coordinate {
  x: number;
  y: number;
}

class Grid {

  public static origin: Coordinate = {
    x: 0,
    y: 0
  };

  private square: number | undefined;

  constructor(point: Coordinate) {
    let disX = point.x - Grid.origin.x;
    let disY = point.y - Grid.origin.y;
    this.calculateSquare(disX, disY)
  }

  public calculateSquare(disX: number, disY: number) {
    this.square = disX * disY / 2;
    console.log(this.square);
  }
}

let grid: Grid = new Grid({x: 10, y: 20});
