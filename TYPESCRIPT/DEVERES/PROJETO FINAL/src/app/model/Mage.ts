class Mage {
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
        this._armorClass = 15,
        this._life = 1000,
        this._level = 1;
    }
    
    public get life(): number {
        return this._life;
    }

    public set life(life: number) {
        this._life = life;
    }

    public get armorClass(): number {
        return this._armorClass;
    }

    public set armorClass(armorClass: number) {
        this._armorClass = armorClass;
    }
}

export const mage = new Mage();