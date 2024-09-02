import { Controller } from "../../controller";
import { GetExerciseUseCase } from "./GetExerciseUseCase";
import { Request, Response } from "express";
import { Exercicio } from "../../../entities/Training";

export class GetExerciseController extends Controller{
  constructor(
    private getExerciseUseCase: GetExerciseUseCase,
  ){
    super();
  }

  async handle(request: Request, response: Response): Promise<Response>{
    const id_exercicio = request.params.id;
    try{
      const exercise: Exercicio = await this.getExerciseUseCase.execute({ id_exercicio });
      return super.handleSuccess(exercise, response);
    }catch(err: any){
      return super.handleError(400, err.message || 'Unexpected Error', response);
    }
  }
}