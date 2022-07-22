import {Request, Response} from 'express';
import {Mage} from '../model/Mage';
import {Warrior} from '../model/Warrior';

class Player {

    public createMage(req: Request, res: Response){

        const {name} = req.body;
        
        let mage = new Mage(name);

        return res.json({
            player: mage
        });
    }

    public createWarrior(req: Request, res: Response){

        const {name} = req.body;
        
        let warrior = new Warrior(name);

        return res.json({
            player: warrior
        });
    }
}

export const player = new Player();