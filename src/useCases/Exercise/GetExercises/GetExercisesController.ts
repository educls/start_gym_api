import { Controller } from "../../controller";
import { GetExercisesUseCase } from "./GetExercisesUseCase";
import { Request, Response } from "express";
import { Exercicio } from "../../../entities/Training";

export class GetExecisesController extends Controller{
  constructor(
    private getExercisesUseCase: GetExercisesUseCase,
  ){
    super();
  }

  async handle(request: Request, response: Response): Promise<Response>{
    try{
      const exercises: Exercicio[] = await this.getExercisesUseCase.execute();
      return super.handleSuccess(exercises, response);
    }catch(err: any){
     return super.handleError(400, err.message || 'Unexpected Error', response);
    }
  }
}