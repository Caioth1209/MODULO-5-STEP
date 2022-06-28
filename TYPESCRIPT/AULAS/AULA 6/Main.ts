// para rodar o ts-node: npx ts-node <nome do arquivo>

import prompt from "prompt-sync";
import Personagem from "./Personagem";

let mago : Personagem = new Personagem("Arcanius", 100, 40, 20, 20);

let teclado = prompt();

let option : number = 0;

while (option != 9) {
    console.log(`\n///// Personagem : ${mago.nome} /////`);
    console.log("(1) - Treinar Ataque");
    console.log("(2) - Treinar Defesa");
    console.log("(3) - Descansar");
    console.log("(4) - Trocar nome");
    console.log("(8) - Imprimir Status");
    console.log("(9) - Sair do Game");
    console.log("//////////////////////\n");
    
    option =+ teclado("Escolha uma ação: ");

    switch (option) {
        case 1:{
            mago.treinarAtaque();
            break;
        }

        case 2:{
            mago.treinarDefesa();
            break;
        }

        case 3:{

            let res : number =+ teclado("\nDigite o tempo de descanso: ");

            mago.descansar(res);

            break;
        }

        case 4:{

            let nome : string = teclado("Digite o novo nome: ");

            mago.nome = nome;

            break;
        }

        case 8:{
            mago.status();
            break;
        }

        case 9:{
            console.log("\nSaindo...");
            break;
        }
        
        default:{
            console.log("Escolha errada...\n");
            break;
        }
    }
}