import { Controller } from "../../../controller";
import { DeleteTrainingExerciseUseCase } from "./DeleteTrainingExerciseUseCase";
import { Request, Response } from "express";

export class DeleteTrainingExerciseController extends Controller {
  constructor(
    private deleteTrainingExerciseUseCase: DeleteTrainingExerciseUseCase,
  ){
    super();
  }

  async handle(request: Request, response: Response): Promise<Response>{
    const treino_id = request.params.id;
    try{
      await this.deleteTrainingExerciseUseCase.execute({ treino_id });
      return super.handleSuccess('Training-Exercise Deleted.', response);
    }catch(err: any){
      return super.handleError(400, err.message || 'Unexpected Error', response);
    }
  }
}