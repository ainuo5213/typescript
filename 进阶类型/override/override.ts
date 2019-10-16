interface Card {
  suit: string;
  card: number;
}

let suits: string[] = ['hearts', 'spades', 'clubs', 'diamonds'];

function pickCard(x: Card[]): number;

function pickCard(x : number) : Card;

function pickCard(x: any): any {
  if (Array.isArray(x)) {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard
  } else if (typeof x === 'number') {
    let pickedCard = Math.floor(x / 13);
    return {
      suit: suits[pickedCard],
      card: x % 13
    }
  }
}

let myDeck: Card[] = [
  {suit: 'diamonds', card: 2},
  {suit: 'spades', card: 10},
  {suit: 'hearts', card: 4},
];

let pickedCard1 = myDeck[pickCard(myDeck)];
console.log(`picked card: ${pickedCard1.card}, picked suit: ${pickedCard1.suit}`);
let pickedCard2 = pickCard(15);
console.log(`picked card: ${pickedCard2.card}, picked suit: ${pickedCard2.suit}`);

