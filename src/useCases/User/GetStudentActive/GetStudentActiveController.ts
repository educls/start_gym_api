import { Controller } from "../../controller";
import { GetStudentActiveUseCase } from "./GetStudentActiveUseCase";
import { Request, Response } from "express";


export class GetStudentActiveController extends Controller {
  constructor(
    private getStudentActiveUseCase: GetStudentActiveUseCase
  ) {
    super();
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const users = await this.getStudentActiveUseCase.execute();

      return super.handleSuccess(users, response);
    } catch (err: any) {
      return super.handleError(400, err.message || 'Unexpected error.', response);
    }
  }
}