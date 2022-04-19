const express = require('express');

const cors = require('cors');

const routes = require('./routes');

require('./config/Connection');

class App {

    constructor(){
        this.app = express();
        this.middleWares();
        this.routes();
    }

    // responsavel por trazer seguranca para a aplicacao.
    middleWares(){

        this.app.use(express.json());

        this.app.use((req, res, next)=>{
            res.header("Access-Control-Allow-Origin", "*");
            
            res.header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE");

            res.header("Access-Control-Allow-Headers","Access, Content-type, Authorization, Accept, Origin, X-Requested-With");

            this.app.use(cors());

            next();
        });
    }

    routes(){
        this.app.use(routes);
    }
}

module.exports = new App().app;