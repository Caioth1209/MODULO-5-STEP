class Warrior{
    private _strength: number;
    private _dexterity: number;
    private _constitution: number;
    private _intelligence: number;
    private _wisdom : number;
    private _charisma : number;
    private _armorClass : number;
    private _life : number;
    private _level : number;

    constructor(){
        this._strength = 5;
        this._dexterity = 5;
        this._constitution = 5;
        this._intelligence = 5;
        this._wisdom = 5;
        this._charisma = 5;
        this._armorClass = 20,
        this._life = 1000,
        this._level = 1;
    }

    public swordAttack(damage : number) : number{
        return damage + this._strength;
    }
}

export const warrior = new Warrior();