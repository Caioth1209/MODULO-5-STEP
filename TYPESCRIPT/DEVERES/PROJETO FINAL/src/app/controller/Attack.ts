import {Request, Response} from 'express';
import {Mage} from '../model/Mage';
import {Warrior} from '../model/Warrior';

class Attack {

    public index(req: Request, res: Response){

        const {typeAttacker, attackerDamage} = req.body;
        let {opponentLife} = req.body;
        
        let warrior = new Warrior("warrior");
        let mage = new Mage("warrior");

        switch (typeAttacker) {

            case "Warrior":{

                if (warrior.attack(attackerDamage) > mage.armorClass) {

                    opponentLife -= attackerDamage;
                    
                    opponentLife = opponentLife < 0 ? 0 : opponentLife;

                    return res.json({
                        opponentLife: opponentLife,
                        message: opponentLife > 0 ? 
                        `O ataque foi realizado! Dano: ${attackerDamage}. Vida do mage: ${opponentLife}` 
                        :
                        `O ataque foi realizado e o mage morreu! Dano : ${attackerDamage}`
                    });
                }

                break;
            }

            case "Mage":{

                if (mage.attack(attackerDamage) > warrior.armorClass) {

                    opponentLife -= attackerDamage;

                    opponentLife = opponentLife < 0 ? 0 : opponentLife;

                    return res.json({
                        opponentLife: opponentLife,
                        message: opponentLife > 0 ? 
                        `O ataque foi realizado! Dano: ${attackerDamage}. Vida do warrior: ${opponentLife}` 
                        :
                        `O ataque foi realizado e o warrior morreu! Dano : ${attackerDamage}`
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

    // public index2(req: Request, res: Response){

    //     const {attacker, opponent, attackerDamage} = req.body;
        
    //     if (attacker.attack(attackerDamage) > opponent.armorClass) {

    //         opponent.life -= attackerDamage;

    //         return res.json({
    //             attacker: attacker,
    //             opponent: opponent,
    //             message: !opponent.isDead() ? 
    //             `O ataque foi realizado! Dano do ${attacker.name}: ${attackerDamage}. Vida do ${opponent.name}: ${opponent.life}`
    //             : 
    //             `O ataque foi realizado e o ${opponent.name} morreu! Dano do ${attacker.name}: ${attackerDamage}.`
    //         });
    //     }
    
    //     return res.json({
    //         attacker: attacker,
    //         opponent: opponent,
    //         message: `O ataque do ${attacker.name} nao entrou!`
    //     });

    // }

    // public index3(req: Request, res: Response){

    //     const {typeAttacker, typeDefender,
    //     attackerDamage,
    //     attacker, opponent} = req.body;
        
    //     switch (typeAttacker) {

    //         case "warrior":{

    //             switch (typeDefender) {
    //                 case "warrior":{

    //                     if (warrior.attack(attackerDamage) > mage.armorClass) {

    //                         opponentLife -= attackerDamage;
        
    //                         return res.json({
    //                             opponentLife: opponentLife,
    //                             message: `O ataque foi realizado! Dano: ${attackerDamage}. Vida do mage: ${opponentLife}`
    //                         });
    //                     }

    //                     break;
    //                 }
    //             }
    //             break;
    //         }

    //         case "mage":{

    //             if (mage.attack(attackerDamage) > warrior.armorClass) {

    //                 opponentLife -= attackerDamage;

    //                 return res.json({
    //                     opponentLife: opponentLife,
    //                     message: `O ataque foi realizado! Dano: ${attackerDamage}. Vida do warrior: ${opponentLife}`
    //                 });
    //             }

    //             break;
    //         }

    //     }
    
    //     return res.json({
    //         opponentLife: opponentLife,
    //         message: `O ataque do ${typeAttacker} nao entrou!`
    //     });

    // }
}

export const attack = new Attack();