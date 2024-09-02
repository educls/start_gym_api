import { Controller } from "../../controller";
import { CreateExerciseUseCase } from "./CreateExerciseUseCase";
import { Request, Response } from "express";

export class CreateExerciseController extends Controller {
  constructor(
    private createExerciseUseCase: CreateExerciseUseCase,
  ){
    super();
  }

  async handle(request: Request, response: Response): Promise<Response>{
    const { nome, descanso, video, categoria_id } = request.body;
    const { n_serie, n_repeticao, } = request.body;
    try{
      await this.createExerciseUseCase.execute({ nome, n_serie, n_repeticao, descanso, video, categoria_id });
      return super.handleSuccess('Exercise Created.', response);
    }catch(err: any){
      return super.handleError(400, err.message || 'Unexpected Error', response);
    }
  }
}