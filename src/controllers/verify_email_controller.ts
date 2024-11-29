import { Request, Response } from "express";
import LoginUser from "../services/login_service";
import VerifyEmail from '../services/verify_email_service';
const createTokenForVerifyEmail = require("../middleware/create_token_verify_email")
const sendForVerifyEmail = require('../utils/mail/send_for_verify_email');
import { MysqlUsersRepository } from "../repositories/implementations/MysqlUsersRepository";
import { User } from "../entities/User";

const loginUser = new LoginUser();
const verifyEmail = new VerifyEmail();

const mysqlUsersRepository = new MysqlUsersRepository();

exports.post = async (req: Request, res: Response) => {
    try{
        const { token, name, email, password } = req.params;
        let userWithEmailOnly = await loginUser.returnIfEmailExists(email);
        if (userWithEmailOnly !== undefined) {
            res.status(401).json({ mensagem: "Email já Cadastrado / Verificado"});
        }else{
            // const token: String = createTokenForVerifyEmail(email);
            // const result = await verifyEmail.setTokenAndEmailOnDBForVerifyEmail(token, email);
            // if (result.affectedRows == 1) {
                // }else{
                    // }
                    
                    const user = new User({
                        tipo_usuario: "aluno",
                        nome: name,
                        email: email,
                        password: password
                    });

                    await mysqlUsersRepository.save(user);

                    await sendForVerifyEmail(token, email, name, password);
                    res.status(201).json({ mensagem: "Email de verificação enviado"});
                    // res.status(201).json({ mensagem: "Erro ao enviar email de Verificação"});
        }

    }catch(err){
        console.log(err);
        res.status(201).json({ mensagem: "Erro no servidor", err});
    }
}