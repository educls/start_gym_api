import { Controller } from "../../../controller";
import { DeleteTrainingStudentUseCase } from "./DeleteTrainingStudentUseCase";
import { Request, Response } from "express";

export class DeleteTrainingStudentController extends Controller{
  constructor(
    private deletTrainingStudent: DeleteTrainingStudentUseCase,
  ){
    super();
  }

  async handle(request: Request, response: Response): Promise<Response>{
    const treino_id = request.params.id;
    try{
      await this.deletTrainingStudent.execute({ treino_id });
      return super.handleSuccess('Training-Student Deleted.', response);
    }catch(err: any){
      return super.handleError(400, err.message || 'Unexpected Error', response);
    }
  }
}