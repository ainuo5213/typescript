// 实例部分接口
interface ClockInterface {
  // currentTime: Date;
  // setTime(date: Date): void;
  tick(): void;
}

// 静态类部分接口
interface ClockConstructor {
  new(hour: number, minute: number): ClockInterface;

  sum(a: number, b: number): number;
}

function createClock(constructor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new constructor(hour, minute)
}

class DigitalClock implements ClockInterface {
  public static sum(a: number, b: number): number {
    return a + b
  }

  constructor(hour: number, minute: number) {
    console.log(hour, minute)
  }

  public tick() {
    console.log('tick tick')
  }
}

class AnalogClock implements ClockInterface {
  public static sum(a: number, b: number): number {
    return a + b + 10
  }

  constructor(hour: number, minute: number) {
    console.log(hour, minute)
  }

  public tick() {
    console.log('beep beep')
  }

}

let digitalClock: DigitalClock = createClock(DigitalClock, 5, 5);
let analogClock: AnalogClock = createClock(AnalogClock, 5, 5);
digitalClock.tick();
analogClock.tick();
console.log(DigitalClock.sum(1, 2));
console.log(AnalogClock.sum(2, 5));
// class Clock implements  ClockConstructor {
//   // @ts-ignore
//   public currentTime: Date;
//
//   constructor(hour: number, minute: number) {
//     console.log(hour, minute)
//   }
//
//   public setTime(date: Date): void {
//     this.currentTime = date;
//   }
// }

