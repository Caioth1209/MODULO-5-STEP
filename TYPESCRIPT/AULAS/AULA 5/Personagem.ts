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
        }
    }
}