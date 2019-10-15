type Label = {
  label: string
}

function printLabel(labelObj: Label): void {
  console.log(labelObj.label)
}

let label = {
  size: 10,
  label: 'Size 10 Object'
};

printLabel(label);

interface Square {
  color: string
  area: number

  [propName: string]: any
}

interface SquareConfig {
  color?: string
  width?: number

}

function createSquare(config: SquareConfig): Square {
  let newSquare: Square = {
    color: 'white',
    area: 100,
    colour: '#fff'
  };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width ** 2;
  }
  return newSquare
}


type Point = {
  readonly x: number
  readonly y: number
}

let point: Point = {
  x: 10,
  y: 20
};

let number: number[] = [1, 2, 3, 4, 5, 6];
let ro: ReadonlyArray<number> = number;
console.log(ro);

interface SearchFunc {
  (source: string, subString: string): string
}

let search: SearchFunc = function (source: string, subString: string) {
  return source + subString;
};

interface StringArr {
  [index: number]: string;
}

let myArray: StringArr = ['asd'];

let str: string = myArray[0];
