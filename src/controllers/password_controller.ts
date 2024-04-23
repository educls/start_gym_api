import { Request, Response } from "express";
import Password from '../services/password_service';
import LoginUser from '../services/login_service';

const password = new Password();
const loginUser = new LoginUser();


exports.post = async (req: Request, res: Response) => {
    try{

        const { email } = req.body
        
        const isValidEmail = await loginUser.returnIfEmailExists(email);
        if(isValidEmail){
            const services = email.split('@')[1].split('.')[0];
            const result = await password.sendEmailForResetPassword(email, services);
            res.status(200).json(
                {message: "Email enviado com sucesso"}
            )
        }else{
            res.status(401).json(
                {message: "Erro ao enviar email"}
            )
        }

    }catch(err){
        console.log("Erro", err)
        res.status(500).json(
            {message: "Erro no servidor"}
        );
    }
}