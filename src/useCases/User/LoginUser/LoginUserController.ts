import { Controller } from "../../controller";
import { LoginUserUseCase } from './LoginUserUseCase';
import { Request, Response } from "express";


export class LoginUserController extends Controller {
  constructor(
    private loginUserUseCase: LoginUserUseCase
  ){
    super()
  }

  async handle(request: Request, response: Response): Promise<Response>{
    const { email, password } = request.body;

    try{
      await this.loginUserUseCase.execute({email, password});
      return super.handleSuccess('Login realizado', response);
    }catch(err: any) {
      return super.handleError(400, err.message || 'Unexpected Error', response)
    }
  }
}