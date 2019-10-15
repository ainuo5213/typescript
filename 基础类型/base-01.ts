let isDone: boolean = false;
// 十进制
let decLiteral: number = 20;
// 十六进制
let hexLiteral: number = 0x14;
// 二进制
let binaryLiteral: number = 0b10100;
// 八进制
let octalliteral: number = 0o24;

let username: string = 'bob';
let age: number = 21;
let sensentence: string = `Hello, my name is ${username}, I'll be ${age} next month`;
console.log(sensentence);

let numberList: number[] = [1, 2, 3, 4];
// let stringList: Array<string> = ['1', '2', '3'];
let tuple: [string, number] = ['1', 2];

enum Color {
  Red = 1,
  Green = 2,
  Blue = 3
}

let color: number = Color.Green;
let colorName: string = Color[2];
console.log(colorName);

let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = true;

function error(message: string): never {
  throw new Error(`this is error massage: ${message}`)
}

function failed() {
  return error('something failed')
}

function infiniteLoop(): never {
  while (true) {
    console.log('asd')
  }
}
