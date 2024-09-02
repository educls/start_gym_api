import { Controller } from "../../../controller";
import { CreateTrainingStudentUseCase } from "./CreateTrainingStudentUseCase";
import { Request, Response } from "express";

export class CreateTrainingStudentController extends Controller {
  constructor(
    private trainingStudentUseCase: CreateTrainingStudentUseCase,
  ){
    super();
  }

  async handle(request: Request, response: Response): Promise<Response>{
    const { treino_id, aluno_id } = request.body;
    try{
      await this.trainingStudentUseCase.execute({ treino_id, aluno_id });
      return super.handleSuccess('Training-Student Created.', response);
    }catch(err: any){
      return super.handleError(400, err.message || 'Unexpected Error', response);
    }
  }
}