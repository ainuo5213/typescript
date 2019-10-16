interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square: Square = <Square>{
  color: '#fff',
  sideLength: 0,
  penWidth: 1
};


interface Counter {
  (start: number): string;

  interval: number;

  reset(): void;
}

function getCounter(): Counter {
  function counter(start: number) {
    return start + '5';
  }

  counter.interval = 123;
  counter.reset = () => {
    console.log('this is counter')
  };
  return counter;
}

let counter: Counter = getCounter();
counter.reset();


class Control {
  // @ts-ignore
  private state: string;
}


interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  public select(): void {
    console.log(';asd')
  }
}

class TextBox extends Control {
  public select() {
    console.log('select')
  }
}


class ImageC extends Control {
  public select() {
    console.log('asd')
  }
}
