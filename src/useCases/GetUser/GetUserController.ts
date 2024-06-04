import { User } from "../../entities/User";
import { GetUserUseCase } from "./GetUserUseCase";
import { Request, Response } from "express";

export class GetUserController {
  constructor(
    private getUserUseCase: GetUserUseCase,
  ){}

  async handle(request: any, response: Response): Promise<Response>{
    const id = request.user.id;
    console.log(id);
    try{
      const userInfos: User = await this.getUserUseCase.execute({id});
      return response.status(200).json({
        userInfos
      })
    }catch (err: any){
      return response.status(400).json({
        message: err.message || 'Unexpected Error'
      })
    }
  }
}