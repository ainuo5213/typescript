class Animal {
  // @ts-ignore
  public name: string;
}

class Dog extends Animal {
  // @ts-ignore
  public age: string;
}

interface NotOkay {
  [x: string]: Animal;

  [x: number]: Dog;
}


interface Numberdictionary {
  readonly [index: number]: string;

  length: number;
}

let myArrayDic: Numberdictionary = ['a', 'b'];
// number索引签名的返回值必须是string类型返回值的子类型
// myArrayDic[2] = '0';
