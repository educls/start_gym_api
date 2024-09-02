import { User } from "../../../entities/User";
import { Controller } from "../../controller";
import { GetUserUseCase } from "./GetUserUseCase";
import { Request, Response } from "express";

export class GetUserController extends Controller {
  constructor(
    private getUserUseCase: GetUserUseCase,
  ) {
    super();
  }

  async handle(request: any, response: Response): Promise<Response> {
    const id = request.user.id;
    console.log(request.user)
    try {
      const userInfos: User = await this.getUserUseCase.execute({ id });
      return super.handleSuccess(userInfos, response);
    } catch (err: any) {
      return super.handleError(400, err.message, response);
    }
  }
}