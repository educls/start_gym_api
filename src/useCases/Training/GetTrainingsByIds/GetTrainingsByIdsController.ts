import { Controller } from "../../controller";
import { GetTrainingsByIdsUseCase } from "./GetTrainingsByIdsUseCase";
import { Request, Response } from 'express';


export class GetTrainingsByIdsController extends Controller {
  constructor(
    private getTrainingsByIdsUseCase: GetTrainingsByIdsUseCase
  ) {
    super();
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { idsTrainings } = request.body; 
    try {
      const trainings = await this.getTrainingsByIdsUseCase.execute({ ids: idsTrainings });
      return super.handleSuccess(trainings, response);
    } catch (error: any) {
      return super.handleError(400, error.message || 'Unexpected error.', response);
    }
  }
}