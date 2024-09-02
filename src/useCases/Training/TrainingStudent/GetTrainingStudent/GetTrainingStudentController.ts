import { Controller } from "../../../controller";
import { GetTrainingStudentUseCase } from "./GetTrainingStudentUseCase";
import { Request, Response } from "express";

export class GetTrainingStudentController extends Controller{ 
  constructor(
    private getTrainingStudentUseCase: GetTrainingStudentUseCase,
  ){
    super();
  }

  async handle(request: Request, response: Response): Promise<Response>{
    const treino_id = request.params.id;
    try{  
      const trainingStudent = await this.getTrainingStudentUseCase.execute({ treino_id });
      return super.handleSuccess(trainingStudent, response);
    }catch(err: any){
      return super.handleError(400, err.message || 'Unexpected Error', response);
    }
  }
}