import { ILoginRepository } from "../../../repositories/ILoginRepository";
import { ILoginUserRequestDTO } from "./LoginUserDTO";

const MAX_LOGIN_ATTEMPTS = 5;
const BLOCK_DURATION_MINUTES = 1;

export class LoginUserUseCase {
  constructor(
    private loginRepository: ILoginRepository
  ){}

  async execute(data: ILoginUserRequestDTO){
  //       let attempt: any;
  //       let attemptForResponse: any;

  //       const currentTime = new Date();
  //       let timeBlockChecked = await this.loginRepository.returnIfTimeBlockedPass(currentTime, data.email);

  //       if(data.email == undefined && data.password == undefined){
  //         throw new Error('Campos Vazios(email e senha).')
  //       }

  //       if(timeBlockChecked){
  //           await this.loginRepository.unblockUser(data.email);
  //       }

  //       let user = await this.loginRepository.login(data.email, data.password);
  //       let userWithEmailOnly = await this.loginRepository.returnUserBasedEmail(data.email);
  //       if (user) {
  //           const token: String = createToken(user.id, user.accounttype, user.name, user.numberwhats, user.email, user.password);
  //           await this.loginRepository.resetAttemptsUser(data.email);
  //           res.status(200).json({ mensagem: "Login bem-sucedido", token, tentativas: 0 });
  //       } else {
  //           attempt = await this.loginRepository.returnUserAttempts(data.email);
  //           if(user == undefined && userWithEmailOnly !== undefined && attempt.login_attempts < MAX_LOGIN_ATTEMPTS){
  //               await this.loginRepository.incrementLoginAttemptUser(data.email);
  //           }else{
  //             throw new Error('Email Inválido.')
  //           }
  //           attemptForResponse = await this.loginRepository.returnUserAttempts(data.email);
  //           console.log(attemptForResponse)
  //           if (userWithEmailOnly !== undefined && user == undefined && attemptForResponse.login_attempts == MAX_LOGIN_ATTEMPTS) {
  //               const blockedAt = new Date();
  //               const blockUntil = new Date();
  //               blockUntil.setMinutes(blockUntil.getMinutes() + BLOCK_DURATION_MINUTES);

  //               const alreadBlocked = await this.loginRepository.verifyIfUserIsBlocked(data.email);
  //               if(!alreadBlocked){
  //                   await this.loginRepository.blockAccountCertainPeriod(blockedAt, blockUntil, data.email);
  //               }
  //               res.status(401).json({ mensagem: "Usuário bloqueado devido a múltiplas tentativas de login falhas", tentativas: attemptForResponse.login_attempts }); 
  //           }
  //       }
  //       if(userWithEmailOnly && user == undefined && attemptForResponse.login_attempts < MAX_LOGIN_ATTEMPTS){
  //           res.status(401).json({ mensagem: "Senha Inválida", tentativas: attemptForResponse.login_attempts });
  //       }
  }
}