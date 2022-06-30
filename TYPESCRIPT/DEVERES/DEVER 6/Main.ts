// para rodar o ts-node: npx ts-node <nome do arquivo>

import prompt from "prompt-sync";
import Personagem from "./Personagem";

let personagens : Personagem[] = [];

let teclado = prompt();

let option : number = 0;

while (option != 9) {
    console.log(`\n///// CRIAÇÃO DE PERSONAGENS /////`);
    console.log(`Personagens criados: ${personagens.length}`);
    console.log(`Capacidade permitida: 5`);
    console.log("(1) - Criar novo personagem");
    console.log("(2) - Conferir personagens criados");
    console.log("(9) - Sair do game");
    console.log("//////////////////////\n");
    
    option =+ teclado("Escolha uma ação: ");

    switch (option) {
        case 1:{

            if (personagens.length == 5) {
                console.log(`\nNão é possível criar novos personagens.`);
            } else {
                console.log("\nCriando novo personagem...");
                
                let correto : boolean = true;

                let nome : string;
                let energia : number;
                let vida : number;
                let ataque : number;
                let defesa : number;

                do {
                    correto = true;

                    nome = teclado("Digite o nome: ");

                    if (nome.length < 4 || nome.length > 50) {
                        console.log("\nNome inválido! Min 4 e Max 50 caracteres.");
                        correto = false;
                    }
                } while (!correto);


                do {
                    correto = true;

                    energia =+ teclado("Digite a energia: ");

                    if (energia < 1 || energia > 100) {
                        console.log("\nEnergia inválida! Min 1 e Max 100.");
                        correto = false;
                    }

                } while (!correto);

                do {
                    correto = true;

                    vida =+ teclado("Digite a vida: ");

                    if (vida < 1 || vida > 100) {
                        console.log("\nVida inválida! Min 1 e Max 100.");
                        correto = false;
                    }

                } while (!correto);
                 
                do {
                    correto = true;

                    ataque =+ teclado("Digite o ataque: ");

                    if (ataque < 1 || ataque > 30) {
                        console.log("\nAtaque inválido! Min 1 e Max 30.");
                        correto = false;
                    }

                } while (!correto);

                do {
                    correto = true;

                    defesa =+ teclado("Digite a defesa: ");

                    if (defesa < 1 || defesa > 30) {
                        console.log("\nDefesa inválida! Min 1 e Max 30.");
                        correto = false;
                    }

                } while (!correto);

                personagens.push(new Personagem(nome, energia, vida, ataque, defesa));

                console.log("\nPersonagem criado com sucesso!");
    
            }
 
            break;
        }
        case 2:{
            
            console.log("\nPersonagens criados:");
            
            personagens.forEach((e) => {
                e.status();
                console.log("/////////////////////");
            });
            
            break;
        }
        case 9:{
            console.log("Saindo do game...");
            break;
        }
    }
}