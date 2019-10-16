class GenericNumber<T> {
  public zeroValue!: T;

  // @ts-ignore
  public add(x: T, y: T): T;
}

let genericNumber = new GenericNumber<number>();
genericNumber.zeroValue = 0;

genericNumber.add = function (x: number, y: number): number {
  return x + y;
};

console.log(genericNumber.add(1, 2));

let genericString = new GenericNumber<string>();
genericString.zeroValue = '0';
genericString.add = function (x: string, y: string): string {
  return x + y;
};
console.log(genericString.add('1', '2'));
