import {Router} from 'express';
import {attack} from './app/controller/Attack';
import {player} from './app/controller/Player';

const router : Router = Router();

// rotas 
router.post("/atk", attack.index);

router.post("/createWarrior", player.createWarrior);

router.post("/createMage", player.createMage);

export {router};