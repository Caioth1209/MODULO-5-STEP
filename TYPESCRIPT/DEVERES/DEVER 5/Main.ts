// para rodar o ts-node: npx ts-node <nome do arquivo>

import prompt from "prompt-sync";
import Personagem from "./Personagem";

let mago : Personagem = new Personagem("Mago", 100, 100, 25, 7);

let guerreiro : Personagem = new Personagem("Guerreiro", 100, 100, 23, 8);

let teclado = prompt();

let option : number = 0;

console.log("\nA batalha do século vai comecar!!!\n");

console.log(`${mago.nome.toUpperCase()} X ${guerreiro.nome.toUpperCase()}`);

// 0 mago, 1 guerreiro
let vez : number = 0;

let vencedor : boolean = false;

do {

    switch (vez) {

        case 0:{

            console.log(`\nVez do ${mago.nome}!`);
        
            do {

                Personagem.menuCombate(mago);

                console.log("\n");
                
                option =+ teclado("Escolha uma ação: ");

                switch (option){
    
                    case 1:{
    
                        guerreiro.vida = mago.atacarOponente(guerreiro);
                        
                        guerreiro.status();
    
                        if (guerreiro.estaMorto()) {
                            
                            console.log(`\n${guerreiro.nome} morreu! \n${mago.nome} foi o vencedor dessa batalha.\n`);
                        
                            vencedor = true;
                        }
    
                        break;
                    }
    
                    case 2:{
                        
                        console.log("///////////////////////////");
                        
                        mago.status();
    
                        guerreiro.status();

                        console.log("///////////////////////////");
    
                        break;
                    }
                }
                
            } while (option == 2);
            
            vez = 1;

            break;
        }
    
        case 1:{

            console.log(`\nVez do ${guerreiro.nome}!`);
            
            do {

                Personagem.menuCombate(guerreiro);

                console.log("\n");
                
                option =+ teclado("Escolha uma ação: ");

                switch (option){
                    case 1:{
                        mago.vida = guerreiro.atacarOponente(mago);
                        
                        mago.status();
    
                        if (mago.estaMorto()) {
    
                            console.log(`\n${mago.nome} morreu! \n${guerreiro.nome} foi o vencedor dessa batalha.\n`);
                        
                            vencedor = true;
                        }
                        break;
                    }
    
                    case 2:{
    
                        console.log("///////////////////////////");
                        
                        mago.status();
    
                        guerreiro.status();

                        console.log("///////////////////////////");
    
                        break;
                    }
                }        
            } while (option == 2);
            
            vez = 0;
            
            break;
        }
    }
       
} while (!vencedor);

// while (option != 9) {
//     console.log("\n///// Personagem /////");
//     console.log("(1) - Treinar Ataque");
//     console.log("(2) - Treinar Defesa");
//     console.log("(3) - Descansar");
//     console.log("(8) - Imprimir Status");
//     console.log("(9) - Sair do Game");
//     console.log("//////////////////////\n");
    
//     option =+ teclado("Escolha uma ação: ");

//     switch (option) {
//         case 1:{
//             mago.treinarAtaque();
//             break;
//         }

//         case 2:{
//             mago.treinarDefesa();
//             break;
//         }

//         case 3:{

//             let res : number =+ teclado("\nDigite o tempo de descanso: ");

//             mago.descansar(res);

//             break;
//         }

//         case 8:{
//             mago.status();
//             break;
//         }

//         case 9:{
//             console.log("\nSaindo...");
//             break;
//         }
        
//         default:{
//             console.log("Escolha errada...\n");
//             break;
//         }
//     }
// }