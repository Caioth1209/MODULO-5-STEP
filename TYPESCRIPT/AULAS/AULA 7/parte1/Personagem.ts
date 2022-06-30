import {Util} from "./Util";

export default class Personagem{
    protected _nome: string;
    protected _armadura: number;
    protected _vidaMaxima: number;
    protected _vidaAtual: number;

    constructor(nome : string){
        this._nome = nome;
        this._armadura = Util.randomizar(10,1000);
        this._vidaMaxima = Util.randomizar(10,1000);
        this._vidaAtual = Util.randomizar(10,1000);
    }
}