import { Controller } from "../../../controller";
import { GetTrainingStudentUseCase } from "./GetTrainingStudentUseCase";
import { Request, Response } from "express";

export class GetTrainingStudentController extends Controller{ 
  constructor(
    private getTrainingStudentUseCase: GetTrainingStudentUseCase,
  ){
    super();
  }

  async handle(request: any, response: Response): Promise<Response>{
    let user_id;

    if (request.user.accounttype == 'professor') {
      user_id = request.params.user_id;
    }else{
      user_id = request.user.id;
    }

    try{  
      const trainingStudent = await this.getTrainingStudentUseCase.execute({ user_id });
      return super.handleSuccess(trainingStudent, response);
    }catch(err: any){
      return super.handleError(400, err.message || 'Unexpected Error', response);
    }
  }
}