const SUITS = ["♠", "♣", "♥", "♦"];
const VALUES = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];



export default class Deck{
    constructor(cards = fullDeck()){
        this.cards = cards;
    }
}

class Card{
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }
}

function fullDeck(){
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
          return new Card(suit, value)
        })
      })
}