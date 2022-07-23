import {Request, Response} from 'express';
import {Mage} from '../model/Mage';
import {Warrior} from '../model/Warrior';

class Attack {

    public index(req: Request, res: Response){

        const {typeAttacker, typeOpponent, attackerDamage, nameAttacker, nameOpponent} = req.body;
        let {opponentLife} = req.body;
        
        let warrior = new Warrior("warrior");
        let mage = new Mage("mage");

        switch (typeAttacker) {

            case "Warrior":{

                switch (typeOpponent) {

                    case "Warrior":{

                        if (warrior.attack(attackerDamage) > warrior.armorClass) {

                            opponentLife -= attackerDamage;
                            
                            opponentLife = opponentLife < 0 ? 0 : opponentLife;
        
                            return res.json({
                                opponentLife: opponentLife,
                                message: opponentLife > 0 ? 
                                `O ataque foi realizado por '${nameAttacker}'! Dano: ${attackerDamage}. Vida do '${nameOpponent}': ${opponentLife}` 
                                :
                                `O ataque foi realizado por '${nameAttacker}' e o '${nameOpponent}' morreu! Dano : ${attackerDamage}`
                            });
                        }
                        break;
                    };
                
                    case "Mage":{

                        if (warrior.attack(attackerDamage) > mage.armorClass) {

                            opponentLife -= attackerDamage;
                            
                            opponentLife = opponentLife < 0 ? 0 : opponentLife;
        
                            return res.json({
                                opponentLife: opponentLife,
                                message: opponentLife > 0 ? 
                                `O ataque foi realizado por '${nameAttacker}'! Dano: ${attackerDamage}. Vida do '${nameOpponent}': ${opponentLife}` 
                                :
                                `O ataque foi realizado por '${nameAttacker}' e o '${nameOpponent}' morreu! Dano : ${attackerDamage}`
                            });
                        }
                        break;
                    };
                }

                break;
            }

            case "Mage":{

                switch (typeOpponent) {
                    case "Warrior":{
                        
                        if (mage.attack(attackerDamage) > warrior.armorClass) {

                            opponentLife -= attackerDamage;
                            
                            opponentLife = opponentLife < 0 ? 0 : opponentLife;
        
                            return res.json({
                                opponentLife: opponentLife,
                                message: opponentLife > 0 ? 
                                `O ataque foi realizado por '${nameAttacker}'! Dano: ${attackerDamage}. Vida do '${nameOpponent}': ${opponentLife}` 
                                :
                                `O ataque foi realizado por '${nameAttacker}' e o '${nameOpponent}' morreu! Dano : ${attackerDamage}`
                            });
                        }
                        break;
                    };
                
                    case "Mage":{

                        if (mage.attack(attackerDamage) > mage.armorClass) {

                            opponentLife -= attackerDamage;
                            
                            opponentLife = opponentLife < 0 ? 0 : opponentLife;
        
                            return res.json({
                                opponentLife: opponentLife,
                                message: opponentLife > 0 ? 
                                `O ataque foi realizado por '${nameAttacker}'! Dano: ${attackerDamage}. Vida do ${nameOpponent}: ${opponentLife}` 
                                :
                                `O ataque foi realizado por '${nameAttacker}' e o ${nameOpponent} morreu! Dano : ${attackerDamage}`
                            });
                        }
                        break;
                    };
                }

                break;
            }

        }
    
        return res.json({
            opponentLife: opponentLife,
            message: `O ataque do '${nameAttacker}' nao entrou!`
        });

    }
}

export const attack = new Attack();