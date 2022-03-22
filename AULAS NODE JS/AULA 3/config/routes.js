const express = require('express');
const routes = express.Router();

let db = [{
    "1" : {
        nome: "Alan",
        idade: "30"
    }
}]

// f1 - get
// param1 - path da rota
// param2 - function retornando req e resp

routes.get("/", (req, resp)=>{
    return resp.json(db);
})

// f2 - post
// param1 - path da rota
// param2 - function retornando req e resp

routes.post("/add", (req, resp)=>{

    // passa o objeto json para o body
    const body = req.body;

    // se tiver nao tiver nada, retorna erro
    if (!body) {
        return resp.status(400).end;
    }

    // se nao, colocar dentro do db
    db.push(body);

    // retorna a resposta.
    return resp.json(body);
})

// f3 - delete

module.exports = routes;