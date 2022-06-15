// para rodar o ts-node: npx ts-node <nome do arquivo>

import prompt from "prompt-sync";

export class Personagem{
    constructor(
        public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number
    ){

    } 
}

let ken : Personagem = new Personagem("Ken Masters", 10, 10, 10, 10);

let teclado = prompt();

let option : number = 0;

while (option != 9) {
    console.log("\n///// Personagem /////");
    console.log("(1) - Treinar Ataque");
    console.log("(2) - Treinar Defesa");
    console.log("(3) - Imprimir Atributos");
    console.log("(9) - Sair do game");
    console.log("//////////////////////\n");
    
    option =+ teclado("Escolha uma ação: ");

    switch (option) {
        case 1:{
            ken.ataque += 2;
            break;
        }

        case 2:{
            ken.defesa += 2
            break;
        }

        case 3:{
            console.log(ken);
            break;
        }

        case 9:{
            console.log("Saindo...");
            break;
        }
        
        default:{
            console.log("Escolha errada...\n");
            break;
        }
    }
}