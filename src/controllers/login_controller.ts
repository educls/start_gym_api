import { Request, Response } from "express";
import LoginUser from "../services/login_service";
const createToken = require("../middleware/create_token")

const loginUser = new LoginUser();
const MAX_LOGIN_ATTEMPTS = 5;
const BLOCK_DURATION_MINUTES = 1;

exports.post = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        let attempt: any;
        let attemptForResponse: any;

        const currentTime = new Date();
        let timeBlockChecked = await loginUser.returnIfTimeBlockedPass(currentTime, email);

        if(email == undefined && password == undefined){
            res.status(401).json({ mensagem: "Campos Vazios(email e senha)", tentativas: 0 });
        }

        if(timeBlockChecked == 'unlock'){
            await loginUser.unblockUser(email);
        }

        let user = await loginUser.returnUserBasedEmailPassword(email, password);
        let userWithEmailOnly = await loginUser.returnUserBasedEmail(email);
        if (user) {
            const token: String = createToken(user.id_usuario, user.tipo_usuario, user.nome, user.telefone, user.email, user.password);
            await loginUser.resetAttemptsBasedEmail(email);
            res.status(200).json({ mensagem: "Login bem-sucedido", token, tentativas: 0 });
        } else {
            attempt = await loginUser.returnUserAttempts(email);
            if(user == undefined && userWithEmailOnly !== undefined && attempt.login_tentativas < MAX_LOGIN_ATTEMPTS){
                await loginUser.incrementLoginAttemptBasedEmail(email);
            }else{
                res.status(401).json({ mensagem: "Email Inválido", tentativas: 0 });
            }
            attemptForResponse = await loginUser.returnUserAttempts(email);
            console.log(attemptForResponse)
            if (userWithEmailOnly !== undefined && user == undefined && attemptForResponse.login_tentativas == MAX_LOGIN_ATTEMPTS) {
                const blockedAt = new Date();
                const blockUntil = new Date();
                blockUntil.setMinutes(blockUntil.getMinutes() + BLOCK_DURATION_MINUTES);

                const alreadBlocked = await loginUser.verifyIfUserBlocked(email);
                if(!alreadBlocked){
                    await loginUser.blockAccountCertainPeriod(blockedAt, blockUntil, email);
                }
                res.status(401).json({ mensagem: "Usuário bloqueado devido a múltiplas tentativas de login falhas", tentativas: attemptForResponse.login_tentativas }); 
            }
        }
        if(userWithEmailOnly && user == undefined && attemptForResponse.login_tentativas < MAX_LOGIN_ATTEMPTS){
            res.status(401).json({ mensagem: "Senha Inválida", tentativas: attemptForResponse.login_tentativas });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ mensagem: "Ocorreu um erro no servidor" });
    }
};
