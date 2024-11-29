import { Controller } from "../../controller";
import { ActiveInactiveUserUseCase } from "./ActiveInactiveUserUseCase";
import { Request, Response } from "express";


export class ActiveInactiveUserController extends Controller {
  constructor(
    private activeInactiveUserUseCase: ActiveInactiveUserUseCase,
  ) {
    super();
  }

  async handle(request: any, response: Response): Promise<Response> {
    const { idAluno } = request.params;
    console.log('id', idAluno)

    try {
      await this.activeInactiveUserUseCase.execute({ user_id: idAluno });

      return super.handleSuccess('Training-Exercise Deleted.', response);
    } catch (err: any) {
      return super.handleError(400, err.message || 'Unexpected Error', response);
    }
  }
}