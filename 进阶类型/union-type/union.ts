function padLeft(value: string, padding: string | number): string {
  if ('number' === typeof padding) {
    return Array(padding + 1).join(' ') + value;
  }
  if ('string' === typeof padding) {
    return padding + value;
  }
  throw Error('Expected string or number, got' + padding)
}

padLeft('Hello world', 4);


interface Bird {
  fly();

  layEggs();
}

interface Fish {
  swim();

  layEggs();
}

function getSmallPet(): Fish | Bird {
  let pet: Fish = {
    swim() {
    },
    layEggs() {
    }
  };
  return pet;
}

let pet = getSmallPet();
// layEggs is ok, cause layEggs exist in both Fish and Bird
pet.layEggs();
// swim not, cause bird cannot swim
// pet.swim()

// 类型谓词
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}

function isNumber(x: string | number): x is number {
  return typeof x === "number"
}

function isString(x: string | number): x is string {
  return typeof x === 'string'
}

function padLeft2(value: string, padding: string | number): string {
  if (isNumber(padding)) {
    return Array(padding + 1).join(' ') + value;
  } else if (isString(padding)) {
    return Array(padding + 1).join(' ') + value;
  }
  throw Error('Expected string or number, got' + padding)
}
