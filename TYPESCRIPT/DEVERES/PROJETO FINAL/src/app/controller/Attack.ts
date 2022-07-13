import {Request, Response} from 'express';
import {mage} from '../model/Mage';
import {warrior} from '../model/Warrior';

class Attack {
    public index(req: Request, res: Response){

        const {typeAttacker, attackerDamage} = req.body;
        let {opponentLife} = req.body;

        switch (typeAttacker) {

            case "warrior":{

                if (warrior.attack(attackerDamage) > mage.armorClass) {

                    opponentLife -= attackerDamage;

                    return res.json({
                        opponentLife: opponentLife,
                        message: `O ataque foi realizado! 
                        Dano: ${attackerDamage}. 
                        Vida do mage: ${opponentLife}`
                    });
                }

                break;
            }

            case "mage":{

                if (mage.attack(attackerDamage) > warrior.armorClass) {

                    opponentLife -= attackerDamage;

                    return res.json({
                        opponentLife: opponentLife,
                        message: `O ataque foi realizado! 
                        Dano: ${attackerDamage}. 
                        Vida do warrior: ${opponentLife}`
                    });
                }

                break;
            }

        }
    
        return res.json({
            opponentLife: opponentLife,
            message: `O ataque do ${typeAttacker} nao entrou!`
        });

    }
}

export const attack = new Attack();