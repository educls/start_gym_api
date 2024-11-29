import { Controller } from "../../controller";
import { Request, Response } from "express";
import { CreateTrainingUseCase } from "./CreateTrainingUseCase";

export class CreateTrainingController extends Controller {
  constructor(
    private createTrainingUseCase: CreateTrainingUseCase
  ){
    super();
  }

  async handle(request: Request, response: Response): Promise<Response>{
    const { professor_id, nome_treino, obs_treino } = request.body;
    try{
      const insetId = await this.createTrainingUseCase.execute({professor_id, nome_treino, obs_treino});
      return super.handleSuccess(insetId, response);
    }catch(err: any){
      return super.handleError(400, err.message || 'Unexpected Error', response);
    }
  }
}