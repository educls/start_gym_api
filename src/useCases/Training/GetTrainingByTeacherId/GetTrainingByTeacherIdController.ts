import { Controller } from "../../controller";
import { GetTrainingByTeacherIdUseCase } from "./GetTrainingByTeacherIdUseCase";
import { Request, Response } from 'express';


export class GetTrainingByTeacherIdController extends Controller {
  constructor(
    private getTrainingByTeacherIdUseCase: GetTrainingByTeacherIdUseCase
  ) {
    super();
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { teacherId } = request.params;
    try {
      const trainings = await this.getTrainingByTeacherIdUseCase.execute({ teacherId });

      return super.handleSuccess(trainings, response);
    } catch (error: any) {
      return super.handleError(400, error.message || 'Unexpected error.', response);
    }
  }
}