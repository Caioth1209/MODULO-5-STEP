import {Request, Response} from 'express';

class FirstController{
    public home(req: Request, res: Response){
        return res.json({
            res: "Hello World"
        });
    }
}

export const firstController = new FirstController();