import { Request, Response } from "express";
import path from "path";
import ConfirmEmail from '../services/confirm_email_service';

const confirmEmail = new ConfirmEmail();

exports.get = async (req: Request, res: Response) => {
    try{
        const { token } = req.params;
        const result = await confirmEmail.confirmEmail(token);

        if (result.affectedRows == 1) {
            res.sendFile(path.join(__dirname, '../pages', 'email-confirmed.html'));
        }else{
            res.sendFile(path.join(__dirname, '../pages', 'email-not-confirmed.html'));
        }

    }catch(err){
        console.log(err);
        res.status(500).json({ mensagem: "Erro no servidor", err})
    }
}