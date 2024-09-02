import { CategoriaMuscular } from "../../../entities/Training";
import { Controller } from "../../controller";
import { GetCategoryMusclesUseCase } from "./GetCategoryMusclesUseCase";
import { Request, Response } from "express";

export class GetCategoryMusclesController extends Controller {
  constructor(
    private getCategoryMusclesUseCase: GetCategoryMusclesUseCase,
  ){
    super();
  }

  async handle(request: Request, response: Response): Promise<Response>{
    try{
      const categoriaMuscles: CategoriaMuscular[] = await this.getCategoryMusclesUseCase.execute();
      return super.handleSuccess(categoriaMuscles, response);
    }catch(err: any){
      return super.handleError(400, err.message || 'Unexpected Error', response);
    }
  }
}