import { Controller } from "../../controller";
import { GetExercisesByIdsUseCase } from "./GetExercisesByIdsUseCase";
import { Request, Response } from 'express';


export class GetExercisesByIdsController extends Controller {
  constructor(
    private getExercisesByIdsUseCase: GetExercisesByIdsUseCase
  ) {
    super();
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { idsExercises } = request.body;
    try {
      const exercises = await this.getExercisesByIdsUseCase.execute({ ids: idsExercises });
      return super.handleSuccess(exercises, response);
    } catch (error: any) {
      return super.handleError(400, error.message, response);
    }
  }
}