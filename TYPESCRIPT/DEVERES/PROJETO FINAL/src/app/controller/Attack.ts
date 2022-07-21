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
                        message: `O ataque foi realizado! Dano: ${attackerDamage}. Vida do mage: ${opponentLife}`
                    });
                }

                break;
            }

            case "mage":{

                if (mage.attack(attackerDamage) > warrior.armorClass) {

                    opponentLife -= attackerDamage;

                    return res.json({
                        opponentLife: opponentLife,
                        message: `O ataque foi realizado! Dano: ${attackerDamage}. Vida do warrior: ${opponentLife}`
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

    public index2(req: Request, res: Response){

        // const {attacker, opponent, attackerDamage} = req.body;

        const attacker = mage;
        const opponent = warrior;
        const attackerDamage = 1000;
        
        if (attacker.attack(attackerDamage) > opponent.armorClass) {

            opponent.life -= attackerDamage;


            return res.json({
                attacker: attacker,
                opponent: opponent,
                message: !opponent.isDead() ? 
                `O ataque foi realizado! Dano do ${attacker.name}: ${attackerDamage}. Vida do ${opponent.name}: ${opponent.life}`
                : 
                `O ataque foi realizado e o ${opponent.name} morreu! Dano do ${attacker.name}: ${attackerDamage}.`
            });
        }
    
        return res.json({
            attacker: attacker,
            opponent: opponent,
            message: `O ataque do ${attacker.name} nao entrou!`
        });

    }
}

export const attack = new Attack();