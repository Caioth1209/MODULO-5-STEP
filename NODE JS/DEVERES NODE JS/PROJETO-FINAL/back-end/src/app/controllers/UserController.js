const User = require('../models/User');

const yup = require('yup');

const bcrypt = require('bcryptjs');

class UserController {

    async show(req, res) {

        User.find().exec(function(err, users){

            if (err) {
                return res.status(400).json({
                    error: true,
                    message: "Erro ao procurar dados"
                })
            }

            return res.status(200).json({
                error: false,
                users
            })
        });
        
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
                    message: "Erro ao tentar inserir usuario no banco!"
                });
            }

            return res.status(200).json({
                error: false,
                message: "Usuário cadastrado com sucesso!"
            })
        });
    }

    async delete(req, res){

        const id = req.body.id;

        let userExist = await User.findOne({
            _id: id
        });

        if (!userExist) {
            return res.status(400).json({
                error: true,
                message: "Usuário não existe!"
            })
        } else {
            User.remove({_id: id}, (err)=>{
                if (err) {
                    return res.status(400).json({
                        error: true,
                        message: err.message
                    })
                }

                return res.status(200).json({
                    error: false,
                    message: "Usuário removido com sucesso"
                })
            })
        }
    }

    async updatePassword(req, res){

        const id = req.body.id;
        let senha = req.body.password;
        
        senha = await bcrypt.hash(senha, 8);
        
        User.findByIdAndUpdate(id, {password:senha}, (err, result)=>{
            if (err) {
                return res.status(400).json({
                    error: true,
                    message: err.message
                })
            } 

            return res.status(200).json({
                error: false,
                message: "Senha trocada com sucesso!",
                user: result
            })  

        })
    }
}

module.exports = new UserController();