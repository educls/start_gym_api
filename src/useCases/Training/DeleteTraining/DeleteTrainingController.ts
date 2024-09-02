import { Controller } from "../../controller";
import { DeleteTrainingUseCase } from "./DeleteTrainingUseCase";
import { Request, Response } from "express";

export class DeleteTrainingController extends Controller {
  constructor(
    private deleteTrainingUseCase: DeleteTrainingUseCase,
  ){
    super();
  }

  async handle(request: Request, response: Response): Promise<Response>{
    const id_treino = request.params.id;
    try{
      await this.deleteTrainingUseCase.execute({ id_treino });
      return super.handleSuccess('Training Deleted.', response);
    }catch(err: any){ 
      return super.handleError(400, err.message || 'Unexpected Error', response);
    }
  }
}