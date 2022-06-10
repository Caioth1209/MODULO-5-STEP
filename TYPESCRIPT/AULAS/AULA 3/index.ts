// // array

// let array: number[] = [];

// let array2: Array<number> = [];

// // tuplas

// let array3: [number, string] = [2,"Caio"];

// console.log(array3);

// // inferencia de tipo

// let res = array3.map((el)=>{
//     return el;
// })

// console.log(res);

// // tipos de funcao

// const getNumber: (num: number)=> number = Number;

// function testeCallback(callback:(num:number)=> number) : string {
//     return "OK";
// }

// console.log(getNumber(2));

interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
    suits:["hearts","spades","clubs","diamonds"],
    cards: Array(52),
    createCardPicker: function (this:Deck){
        return ()=>{
            let pickedCard = Math.floor(Math.random() * 52);

            let pickedSuit = Math.floor(pickedCard/13);

            return {suit: this.suits[pickedSuit],card: pickedCard % 13}
        };
    }
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log(pickedCard);
