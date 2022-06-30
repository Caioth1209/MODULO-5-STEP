import Personagem from "./Personagem";
import {Util} from "./Util";

export default class Guerreiro extends Personagem {
    private _forca: number;
    private _agilidade: number;

    constructor(nome : string){
        super(nome);
        this._forca = Util.randomizar(10,1000);
        this._agilidade = Util.randomizar(10,1000);
    } 
}