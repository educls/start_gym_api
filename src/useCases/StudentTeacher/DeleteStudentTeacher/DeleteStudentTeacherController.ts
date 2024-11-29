import { Request, Response } from "express";
import { Controller } from "../../controller";
import { DeleteStudentTeacherUseCase } from "./DeleteStudentTeacherUseCase";


export class DeleteStudentTeacherController extends Controller{
  constructor(
    private deleteStudentTeacherUseCase: DeleteStudentTeacherUseCase,
  ) {
    super();
  }

  async handle(request: Request, response: Response){
    const { professor_id, aluno_id } = request.body;
    try{
      await this.deleteStudentTeacherUseCase.execute({professor_id, aluno_id});
      return super.handleSuccess('Deleted', response);
    }catch(error: any){
      return super.handleError(400, error.message || 'Unexpected Error', response);
    }
  }
}