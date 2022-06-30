import Personagem from "./Personagem";
import {Util} from "./Util";

export default class Mago extends Personagem {
    private _bolaDeFogo: number;
    private _raioDeFogo: number;

    constructor(nome : string){
        super(nome);
        this._bolaDeFogo = Util.randomizar(10,1000);
        this._raioDeFogo = Util.randomizar(10,1000);
    }
    
}