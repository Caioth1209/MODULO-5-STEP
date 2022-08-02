const isPalindromo = (palavra : string) : boolean =>{
    var palavraInvertida : string = palavra.split("").reverse().join("");
    // separa a string em um array
    // inverte o array
    // junta tudo de novo
  
    return palavra == palavraInvertida;
}

console.log(isPalindromo("casinha"));
console.log(isPalindromo("asa"));