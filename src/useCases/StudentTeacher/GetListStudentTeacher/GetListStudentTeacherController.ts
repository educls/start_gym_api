import { Request, Response } from "express";
import { Controller } from "../../controller";
import { GetListStudentTeacherUseCase } from "./GetListStudentTeacherUseCase";


export class GetListStudentTeacherController extends Controller {
  constructor(
    private getListStudentTeacherUseCase: GetListStudentTeacherUseCase,
  ) {
    super();
  }

  async handle(request: Request, response: Response): Promise<Response>{
    const { professor_id } = request.body;
    try{
      const result = await this.getListStudentTeacherUseCase.execute({professor_id});
      return super.handleSuccess(result, response);
    }catch(error: any){
      return super.handleError(400, error.message || 'Unexpected Error', response);
    }
  }
}