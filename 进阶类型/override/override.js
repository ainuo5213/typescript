"use strict";
var suits = ['hearts', 'spades', 'clubs', 'diamonds'];
function pickCard(x) {
    if (Array.isArray(x)) {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x === 'number') {
        var pickedCard = Math.floor(x / 13);
        return {
            suit: suits[pickedCard],
            card: x % 13
        };
    }
}
var myDeck = [
    { suit: 'diamonds', card: 2 },
    { suit: 'spades', card: 10 },
    { suit: 'hearts', card: 4 },
];
var pickedCard1 = myDeck[pickCard(myDeck)];
console.log("picked card: " + pickedCard1.card + ", picked suit: " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
console.log("picked card: " + pickedCard2.card + ", picked suit: " + pickedCard2.suit);
