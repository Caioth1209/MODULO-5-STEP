const User = require('../models/User');

const yup = require('yup');

const bcrypt = require('bcryptjs');

class UserController {

    index(req, res){
        console.log(req.body);
    }

    show(req, res) {
        
        var users = ["Kaio", "Larissa", "Danver"];
        
        return res.status(200).json({
            error: false,
            users
        })
    }

    async store(req, res) {

        let schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().required()
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ 
                error: true,
                message: "Dados inválidos!"
            });
        }

        let userExist = await User.findOne({
            email: req.body.email
        });

        if (userExist) {
            return res.status(400).json({
                error: true,
                message: "Esse usuário já existe!"
            })
        }

        const {name, email, password} = req.body;

        const data = { name, email, password };

        data.password = await bcrypt.hash(data.password, 8);

        await User.create(data, (err)=>{
            if (err) {
                return res.status(400).json({ 
                    error: true,
                    message: "Erro ao tentar inserir usuario no banco"
                });
            }

            return res.status(200).json({
                error: false,
                message: "Usuário cadastrado com sucesso!"
            })
        });
    }
}

module.exports = new UserController();