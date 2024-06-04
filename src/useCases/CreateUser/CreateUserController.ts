import { CreateUserUseCase } from "./CreateUserUseCase";
import { Request, Response } from "express";

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ){}

  async handle(request: Request, response: Response): Promise<Response>{
    const { accounttype, name, email, password } = request.body;

    try{
      await this.createUserUseCase.execute({
        accounttype, name, email, password
      })
      return response.status(201).json({
        
      });
    }catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected Error'
      })
    }
  }
} 