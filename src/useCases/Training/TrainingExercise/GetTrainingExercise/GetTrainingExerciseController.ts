import { Controller } from "../../../controller";
import { GetTrainingExerciseUseCase } from "./GetTrainingExerciseUseCase";
import { Request, Response } from "express";

export class GetTrainingExerciseController extends Controller {
  constructor(
    private getTrainingExerciseUseCase: GetTrainingExerciseUseCase,
  ){
    super();
  }

  async handle(request: Request, response: Response): Promise<Response>{
    const treino_id = request.params.id;
    try{
      const trainingExercise = await this.getTrainingExerciseUseCase.execute({ treino_id });
      return super.handleSuccess(trainingExercise, response);
    }catch(err: any){
      return super.handleError(400, err.message || 'Unexpected Error', response);
    }
  }
}