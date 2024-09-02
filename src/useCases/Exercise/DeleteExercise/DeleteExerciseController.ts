import { Controller } from "../../controller";
import { DeleteExerciseUseCase } from "./DeleteExerciseUseCase";
import { Request, Response } from "express";

export class DeleteExerciseController extends Controller {
  constructor(
    private deleteExerciseUseCase: DeleteExerciseUseCase,
  ){
    super();
  }

  async handle(request: Request, response: Response): Promise<Response>{
    const id_exercicio = request.params.id;
    try{
      await this.deleteExerciseUseCase.execute({ id_exercicio });
      return super.handleSuccess('Exercise Deleted.', response);
    }catch(err: any){
      return super.handleError(400, err.message || 'Unexpected Error', response);
    }
  }
}