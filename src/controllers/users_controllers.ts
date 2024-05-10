import { Request, Response } from "express";
import path from "path";
const users_service = require('../services/users_services')


exports.post = async (req: Request, res: Response) => {
    try{
        const { accountType, photo, name, numWhats, email, password } = req.body;
        const result = await users_service.postUser(accountType, photo, name, numWhats, email, password);

        if (result == undefined) {
            res.status(401).json({ mensagem: "Usuario não Cadastrado"});
        }else if(result.affectedRows == 1){
            res.status(201).json({ mensagem: "Usuario Cadastrado", data: result});
        }

    }catch(err){
        console.log(err);
    }
}

exports.putUser = async (req: any, res: Response) => {
    try{
        const userID: number = req.user.id;
        const { photo, name, numWhats, email, password } = req.body;
        let affectedRows: number = 0;

        if (photo) {
            const result = await users_service.updateUserPhoto(userID, photo);
            affectedRows += result.affectedRows;
        }
        if (name) {
            const result = await users_service.updateUserName(userID, name);
            affectedRows += result.affectedRows;
        }
        if (numWhats) {
            const result = await users_service.updateUserNumberWhats(userID, numWhats);
            affectedRows += result.affectedRows;
        }
        if (email) {
            const result = await users_service.updateUserEmail(userID, email);
            affectedRows += result.affectedRows;
        }
        if (password) {
            const result = await users_service.updateUserPassword(userID, password);
            affectedRows += result.affectedRows;
        }

        if(affectedRows > 0){
            res.status(201).json({ mensagem: "Usuario atualizado"});
        }else{
            res.status(401).json({ mensagem: "Nenhum usuario atualizado"});
        }
    }catch(err){
        console.log("Erro no server:", err)
        res.status(500).json({ mensagem: "Erro no servidor"});
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
        const photoBytesRes = await users_service.getImgUser(req.user.id)
        const textData: string = photoBytesRes.toString('utf-8');

        if (req.user) {
            res.status(200).json({mensagem: req.user, photo: textData})
        }else{
            res.status(401).json({ mensagem: "Token inválido / token expirado"})
        }

    }catch(err){
        console.log(err);
    }
}