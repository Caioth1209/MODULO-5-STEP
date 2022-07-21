export abstract class Character{
    private _name : string;
    private _strength: number;
    // private _dexterity: number;
    // private _constitution: number;
    // private _intelligence: number;
    // private _wisdom : number;
    // private _charisma : number;
    private _armorClass : number;
    private _life : number;
    // private _level : number;

    constructor(name: string,strength: number, armorClass: number, life: number){
        this._name = name;
        this._strength = strength;
        // this._dexterity = 5;
        // this._constitution = 5;
        // this._intelligence = 5;
        // this._wisdom = 5;
        // this._charisma = 5;
        this._armorClass = armorClass;
        this._life = life;
        // this._level = 1;
    }

    public abstract attack(damage : number) : number;

    public isDead(): boolean {
        
        if (this.life <= 0) {
            this.life = 0;
            return true;
        }

        return false;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get strength(): number {
        return this._strength;
    }

    public set strength(strength: number) {
        this._strength = strength;
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