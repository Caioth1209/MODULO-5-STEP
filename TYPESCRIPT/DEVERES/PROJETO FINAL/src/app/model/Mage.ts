import {Character} from '../model/Character';

export class Mage extends Character{
    
    constructor(name: string){
        super(name,5,15,100);
    }

    public attack(damage : number) : number{
        return damage + super.strength;
    }
}
