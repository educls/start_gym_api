import { Controller } from "../../controller";
import { GetTrainingUseCase } from "./GetTrainingUseCase";
import { Request, Response } from "express";

export class GetTrainingController extends Controller { 
  constructor(
    private getTrainingUseCase: GetTrainingUseCase,
  ){
    super();
  }

  async handle(request: any, response: Response): Promise<Response>{
    const id_treino = request.params.id;
    try{
      const training = await this.getTrainingUseCase.execute({ id_treino });
      return super.handleSuccess(training, response);
    }catch(err: any){
      return super.handleError(400, err.message || 'Unexpected Error', response);
    }
  }
}