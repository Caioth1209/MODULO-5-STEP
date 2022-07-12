import {Request, Response} from 'express';
import {mage} from '../model/Mage';
import {warrior} from '../model/Warrior';

class Attack {
    public index(req: Request, res: Response){

        const {typePlayer, damage} = req.body;

        if (warrior.swordAttack(damage) > mage.armorClass) {
            return res.json({
                res: `O ataque foi realizado --- DANO: ${damage}`
            });
        }

        return res.json({
            res: `Jogador: ${typePlayer} - ${damage}`
        });
    }
}

export const attack = new Attack();

// PERGUNTAS QUE TEM QUE SEREM SOLUCIONADAS

// quem eu irei atacar ?
// quantos pontos de dano o cria causou ?
// tipo do player atacante ?
