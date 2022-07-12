import {Router} from 'express';
import {attack} from './app/controller/Attack';

const router : Router = Router();

// rotas 
router.post("/atk", attack.index);

export {router};