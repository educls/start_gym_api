import { Controller } from "../../controller";
import { GetStudentInactiveUseCase } from "./GetStudentInactiveUseCase";
import { Request, Response } from "express";


export class GetStudentInactiveController extends Controller{
  constructor(
    private getStudentInactiveUseCase: GetStudentInactiveUseCase,
  ) {
    super();
  }

  async handle(request: Request, response: Response): Promise<Response>{
    try{
      const users = await this.getStudentInactiveUseCase.execute();
      console.log(users);

      return super.handleSuccess(users, response);
    }catch(err: any){
      return super.handleError(400, err.message || 'Unexpected error.', response);
    }
  }
}