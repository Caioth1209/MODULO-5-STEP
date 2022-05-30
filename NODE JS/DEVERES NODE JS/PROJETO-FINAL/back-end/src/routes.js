const { Router } = require('express');

const UserController = require('./app/Controllers/UserController');

const LoginController = require('./app/Controllers/LoginController');

// middleWare é um verificador
const AuthMiddleware = require('./app/middlewares/AuthMiddleware');

const routes = new Router();

routes.post("/user", UserController.index);

routes.get("/getUser", AuthMiddleware, UserController.show);

routes.post("/addUser", UserController.store);

routes.post("/loginUser", LoginController.index);

module.exports = routes;