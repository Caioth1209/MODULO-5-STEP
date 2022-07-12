import express from 'express';
import {router} from './Router';

export class App {

    public server : express.Application = express();

    constructor(){
        this.server;
        this.middlewares();
        this.router();
    }

    private middlewares(){
        this.server.use(express.json());
    }

    private router(){
        this.server.use(router);
    }
}

