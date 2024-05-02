import { Request, Response } from "express";
import path from "path";
const users_service = require('../services/users_services')


exports.post = async (req: Request, res: Response) => {
    try{
        const { accountType, photo, name, numWhats, email, password } = req.body;
        const result = await users_service.postUser(accountType, photo, name, numWhats, email, password);

        if (result == undefined) {
            res.status(401).json({ mensagem: "Usuario não Cadastrado"})
        }else if(result.affectedRows == 1){
            res.status(201).json({ mensagem: "Usuario Cadastrado", data: result})
        }

    }catch(err){
        console.log(err);
    }
}

exports.postResetPassword = async (req: Request, res: Response) => {
    try{

        const result = await users_service.resetPasswordUser(req.body.email, req.body.newPassword);

        if(result.affectedRows > 0){
            res.sendFile(path.join(__dirname, '../pages', 'sucessfull.html'));
        }else{
            res.status(401).send('Não foi possivel redefinir a senha');
        }

    }catch(err){
        console.log(err);
        res.status(500).send('Ocorreu um erro ao redefinir a senha');
    }
}

exports.get = async (req: any, res: Response) => {
    try{

        if (req.user) {
            res.status(200).json(req.user)
        }else{
            res.status(401).json({ mensagem: "Token inválido / token expirado"})
        }

    }catch(err){
        console.log(err);
    }
}