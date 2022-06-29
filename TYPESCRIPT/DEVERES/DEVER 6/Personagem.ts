export default class Personagem{
    
    constructor(
        private _nome: string,
        private _energia: number,
        private _vida: number,
        private _ataque: number,
        private _defesa: number
    ){}
    
    public status() : void { 
        console.log(`\nStatus: ${this.nome}`);
        console.log(`---------------------`);
        console.log(`Energia: ${this.energia}`);
        console.log(`Vida: ${this.vida}`);
        console.log(`Ataque: ${this.ataque}`);
        console.log(`Defesa: ${this.defesa}`);
    }
    
    public treinarAtaque() : void{
        console.log("\nTreinando ataque...");
        
        let valor : number = this.randomizar(7);
        this.ataque += valor;

        console.log(`\nSeu ataque subiu ${valor} pontos!`);
    }

    public treinarDefesa() : void{
        console.log("\nTreinando defesa...");
        
        let valor : number = this.randomizar(5);
        this.defesa += valor;

        console.log(`\nSua defesa subiu ${valor} pontos!`);
    }

    public descansar(horas : number) : void{

        let recuperacao = horas +  this.randomizar(5);

        this.energia += recuperacao;

        if (this.energia > 100) {
            this.energia = 100;
            console.log("\nVocê recuperou toda a sua energia!\n");
        } else {
            console.log(`\nVocê recuperou a sua energia até ${this.energia}!\n`);
        }
    }

    public atacarOponente(oponente : Personagem) : number{

        console.log(`\nAtacando oponente: ${oponente.nome}\n`);

        oponente.vida -= this.ataque;

        if (oponente.vida < 0) {
            oponente.vida = 0;
        }

        console.log(`\n${this.nome} tirou ${this.ataque} de vida do ${oponente.nome}!!!\n`);
        
        return oponente.vida;
    }

    public estaMorto() : boolean {

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

    private randomizar(fator : number) : number{
        return Math.floor(Math.random() * fator);
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public get energia(): number {
        return this._energia;
    }

    public set energia(energia: number) {
        this._energia = energia;
    }

    public get vida(): number {
        return this._vida;
    }

    public set vida(vida: number) {
        this._vida = vida;
    }

    public get ataque(): number {
        return this._ataque;
    }

    public set ataque(ataque: number) {
        this._ataque = ataque;
    }

    public get defesa(): number {
        return this._defesa;
    }

    public set defesa(defesa: number) {
        this._defesa = defesa;
    }
}