import {Character} from '../model/Character';

class Warrior extends Character{
    
    constructor(){
        super("Blast",5,20,1000);
    }

    public attack(damage : number) : number{
        return damage + super.strength;
    }
}

export const warrior = new Warrior();