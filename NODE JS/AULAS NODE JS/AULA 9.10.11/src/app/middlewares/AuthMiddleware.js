const jwt = require("jsonwebtoken");

const config = require("../../config/auth");

const {promisify} = require("util");

module.exports = async (req, res, next) => {
    // 1 - o token nao existe
    const auth = req.headers.authorization;

    if (!auth) {
        return res.status(400).json({
            error: true,
            code: 401,
            message: "O token de autenticação não existe"
        })
    }

    const [ ,token] = auth.split(" ");

    console.log(token);

    next();
}