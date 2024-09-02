import { Controller } from "../../controller";
import { CreateCategoryMuscularUseCase } from "./CreateCategoryMuscularUseCase";
import { Request, Response } from "express";

export class CreateCategoryMuscularController extends Controller {
  constructor(
    private createCategoryMuscularUseCase: CreateCategoryMuscularUseCase,
  ) {
    super();
  }

  async handle(request: Request, response: Response): Promise<Response>{
    const { nome } = request.body;
    try{
      await this.createCategoryMuscularUseCase.execute({ nome });
      return super.handleSuccess('Categoria Muscular Criada', response);
    }catch(err: any){
      return super.handleError(400, err.message || 'Unexpected Error', response);
    }
  }
}