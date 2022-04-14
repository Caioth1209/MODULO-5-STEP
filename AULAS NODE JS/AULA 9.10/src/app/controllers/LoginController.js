const User = require("../models/User");

const bcrypt = require('bcryptjs');

class LoginController{

    async index(req, res){
        const {email, password} = req.body;

        const userExist = await User.findOne({email});

        //parte 1: Verificar se o user existe
        if (!userExist) {
            return res.status(400).json({
                error: true,
                message: "Usuário não existe!"
            })
        }

        //parte 2: Verificar se a senha esta correta

        if (!(await bcrypt.compare(password, userExist.password))) {
            return res.status(400).json({
                error: true,
                message: "Senha inválida!"
            })
        }

        //parte 3: Esta tudo certo ? Retorna a senha e email

        return res.status(200).json({
            error: false,
            message: "Você entrou no sistema!"
        })
    }

}

module.exports = new LoginController();