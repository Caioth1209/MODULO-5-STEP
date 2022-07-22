import {Character} from '../model/Character';

export class Warrior extends Character{
    
    constructor(name : string){
        super(name,5,20,100);
    }

    public attack(damage : number) : number{
        return damage + super.strength;
    }
}