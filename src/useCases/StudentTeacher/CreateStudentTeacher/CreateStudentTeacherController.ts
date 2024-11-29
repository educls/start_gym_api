import { Request, Response } from "express";
import { Controller } from "../../controller";
import { CreateStudentTeacherUseCase } from "./CreateStudentTeacherUseCase";


export class CreateStudentTeacherController extends Controller {
  constructor(
    private createStudentTeacherUseCase: CreateStudentTeacherUseCase,
  ) {
    super();
  }

  async handle(request: Request, response: Response): Promise<Response>{
    const { professor_id, aluno_id } = request.body;
    try{  
      await this.createStudentTeacherUseCase.execute({professor_id, aluno_id});
      return super.handleSuccess('Aluno assiciado ao professor', response);
    }catch(error: any){
      return super.handleError(400, error.message || 'Unexpected Error', response);
    }
  }
}