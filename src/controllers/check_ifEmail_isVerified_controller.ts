import { Request, Response } from "express";
import CheckIfEmailIsVerified from './../services/check_ifEmail_isVerified_service';

const checkIfEmailIsVerified = new CheckIfEmailIsVerified();


exports.get = async (req: Request, res: Response) => {
    try{
        const { email } = req.params;
        const result = await checkIfEmailIsVerified.check(email);
        if (result[0] === undefined) {
            res.status(200).json({ mensagem: true, status: false})
        }else if (result[0].email_verified === 1) {
            res.status(200).json({ mensagem: true, status: true})
        }else{
            res.status(200).json({ mensagem: false})
        }

    }catch(err){
        console.log(err);
        res.status(500).json({ mensagem: "Erro no servidor", err})
    }
}

exports.delete = async (req: Request, res: Response) => {
    try{
        const { email } = req.params;
        const result = await checkIfEmailIsVerified.deleteEmailForVerification(email);
        
        if (result.affectedRows) {
            res.status(200).json({ mensagem: true})
        }else{
            res.status(200).json({ mensagem: false})
        }

    }catch(err){
        console.log(err);
        res.status(500).json({ mensagem: "Erro no servidor", err})
    }
}