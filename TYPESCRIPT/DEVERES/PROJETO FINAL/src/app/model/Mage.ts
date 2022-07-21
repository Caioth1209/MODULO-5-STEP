import {Character} from '../model/Character';

class Mage extends Character{
    
    constructor(){
        super("Magic",5,15,1000);
    }

    public attack(damage : number) : number{
        return damage + super.strength;
    }
}

export const mage = new Mage();