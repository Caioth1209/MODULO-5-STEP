export default class Personagem{
    
    constructor(
        public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number
    ){}
    
    status() : void {
        console.log(`\nStatus: ${this.nome}`);
        console.log(`---------------------`);
        console.log(`Energia: ${this.energia}`);
        console.log(`Vida: ${this.vida}`);
        console.log(`Ataque: ${this.ataque}`);
        console.log(`Defesa: ${this.defesa}`);
    }

    treinarAtaque() : void{

        console.log("\nTreinando ataque...");
        
        let valor : number = Math.floor(Math.random() * 7);
        this.ataque += valor;

        console.log(`\nSeu ataque subiu ${valor} pontos!`);
    }

    treinarDefesa() : void{
        console.log("\nTreinando defesa...");
        
        let valor : number = Math.floor(Math.random() * 5);
        this.defesa += valor;

        console.log(`\nSua defesa subiu ${valor} pontos!`);
    }

    descansar(horas : number) : void{

        let recuperacao = horas + Math.floor(Math.random() * 5);

        this.energia += recuperacao;

        if (this.energia > 100) {
            this.energia = 100;
            console.log("\nVocê recuperou toda a sua energia!\n");
        } else {
            console.log(`\nVocê recuperou a sua energia até ${this.energia}!\n`);
        }
    }

    atacarOponente(oponente : Personagem) : number{

        console.log(`\nAtacando oponente: ${oponente.nome}\n`);

        oponente.vida -= this.ataque;

        if (oponente.vida < 0) {
            oponente.vida = 0;
        }

        console.log(`\n${this.nome} tirou ${this.ataque} de vida do ${oponente.nome}!!!\n`);
        
        return oponente.vida;
    }

    estaMorto() : boolean {

        if (this.vida <= 0) {
            return true;   
        }

        return false;
    }

    static menuCombate(pers : Personagem) : void {
        console.log(`\n///// ${pers.nome} /////`);
        console.log("(1) - Atacar oponente");
        console.log("(2) - Imprimir Status");
        console.log("//////////////////////\n");
    }

    static menuLobby(pers : Personagem) : void {
        console.log(`\n///// ${pers.nome} ///////`);
        console.log("(1) - Treinar Ataque");
        console.log("(2) - Treinar Defesa");
        console.log("(3) - Descansar");
        console.log("(8) - Imprimir Status");
        console.log("(9) - Sair do Game");
        console.log("//////////////////////\n");
    }
}