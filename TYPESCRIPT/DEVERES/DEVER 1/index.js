"use strict";
const isPalindromo = (palavra) => {
    var palavraInvertida = palavra.split("").reverse().join("");
    // separa a string em um array
    // inverte o array
    // junta tudo de novo
    if (palavra == palavraInvertida) {
        return "Sim";
    }
    else {
        return "Não";
    }
};
console.log(isPalindromo("casinha"));
console.log(isPalindromo("asa"));
