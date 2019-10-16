// type inference => number
let x = 3;

// type inference => (number | null)[]
let y = [0, 1, null];

class Animal {
  numlegs!: number
}

class Bee extends Animal {

}

class Lion extends Animal {

}

// type inference => (Bee | Lion)[]
let zoo: Animal[] = [new Bee(), new Lion()];

window.onmousedown = function (mouseEvent: any) {
  console.log(mouseEvent.clickTime)
};
