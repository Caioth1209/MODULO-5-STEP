import express from 'express';
import {router} from './Router';
import cors from 'cors';


export class App {

    public server : express.Application = express();

    constructor(){
        this.server;
        this.middlewares();
        this.router();
    }

    private middlewares(){
        this.server.use(express.json());
        this.server.use((req, res, next)=>{
            res.header("Access-Control-Allow-Origin", "*");
            
            res.header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE");

            res.header("Access-Control-Allow-Headers","Access, Content-type, Authorization, Accept, Origin, X-Requested-With");

            this.server.use(cors());

            next();
        });
    }

    private router(){
        this.server.use(router);
    }
}

