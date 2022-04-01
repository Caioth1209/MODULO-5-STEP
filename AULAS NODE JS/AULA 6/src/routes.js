const { Router } = require('express');

const UserController = require("./app/controllers/UserController");

const routes = new Router();

//POST
//GET
//PUT
//DELETE

routes.post('/user', UserController.index);