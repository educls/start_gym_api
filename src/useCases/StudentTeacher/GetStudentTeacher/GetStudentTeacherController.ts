import { Request, Response } from "express";
import { Controller } from "../../controller";
import { GetStudentTeacherUseCase } from "./GetStudentTeacherUseCase";


export class GetStudentTeacherController extends Controller{
  constructor(
    private getStudentTeacherUseCase: GetStudentTeacherUseCase,
  ) {
    super();
  }

  async handle(request: Request, response: Response){
    const { professor_id, aluno_id } = request.body;
    try{
      const result = await this.getStudentTeacherUseCase.execute({professor_id, aluno_id});
      return super.handleSuccess(result, response);
    }catch(error: any){
      return super.handleError(400, error.message || 'Unexpected Error', response);
    }
  }
}