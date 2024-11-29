import { Controller } from "../../controller";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { Request, Response } from "express";

export class CreateUserController extends Controller {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ){
    super();
  }

  async handle(request: Request, response: Response): Promise<Response>{
    const { tipo_usuario, nome, email, password } = request.body;

    try{
      await this.createUserUseCase.execute({tipo_usuario, nome, email, password})
      return super.handleSuccess('Usuário Cadastrado', response);
    }catch (err: any) {
      return super.handleError(400, err.message || 'Unexpected Error', response);
    }
  }
}