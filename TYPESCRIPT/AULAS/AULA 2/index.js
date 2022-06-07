"use strict";
// interface User {
//     name: string,
//     age: number, 
//     address?: string
// }
function createSquare(sc) {
    let newSquare = { color: "black", area: 50 };
    if (sc.color) {
        newSquare.color = sc.color;
    }
    if (sc.width) {
        newSquare.area = sc.width * sc.width;
    }
    return newSquare;
}
let mySquare = createSquare({});
console.log(mySquare);
