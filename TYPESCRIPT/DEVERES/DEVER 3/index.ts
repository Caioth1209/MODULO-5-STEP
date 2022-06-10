interface Card {
    suit: string;
    card: string;
}

interface Deck {
    suits: string[];
    cards: string[];
    createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
    suits:["hearts","spades","clubs","diamonds"],
    cards: Array(52),
    createCardPicker: function (this:Deck){
        return ()=>{

            let values = ["Ace", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

            let pickedCard = Math.floor(Math.random() * 52);

            let pickedSuit = Math.floor(pickedCard/13);

            console.log(pickedCard);

            return {
                suit: this.suits[pickedSuit],
                card: values[pickedCard % 13]
            }
        };
    }
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log(pickedCard);
