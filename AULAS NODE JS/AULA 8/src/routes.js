const { Router } = require('express');

const UserController = require('./app/Controllers/UserController');

const routes = new Router();

routes.post("/user", UserController.index);

routes.get("/getUser", UserController.show);

routes.post("/addUser", UserController.store);

module.exports = routes;