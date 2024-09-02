import { Controller } from "../../../controller";
import { CreateTrainingExerciseUseCase } from "./CreateTrainingExerciseUseCase";
import { Request, Response } from "express";

export class CreateTrainingExerciseController extends Controller{
  constructor(
    private createTrainingExerciseUseCase: CreateTrainingExerciseUseCase,
  ){
    super();
  }

  async handle(request: Request, response: Response): Promise<Response>{
    const { treino_id, exercicio_id } = request.body;
    try{
      await this.createTrainingExerciseUseCase.execute({ treino_id, exercicio_id });
      return super.handleSuccess('Training-Exercise Created.', response);
    }catch(err: any){
      return super.handleError(400, err.message || 'Unexpected Error', response);
    }
  }
}