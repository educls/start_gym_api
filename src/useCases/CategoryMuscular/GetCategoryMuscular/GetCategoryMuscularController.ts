import { CategoriaMuscular } from "../../../entities/Training";
import { Controller } from "../../controller";
import { GetCategoryMuscularUseCase } from "./GetCategoryMuscularUseCase";
import { Request, Response } from "express";

export class GetCategoryMuscularController extends Controller{
   constructor(
    private getCategoryMuscularUseCase: GetCategoryMuscularUseCase,
   ) {
    super();
   }

   async handle(request: Request, response: Response): Promise<Response>{
    const id_categoria_muscular = request.params.id;
    try{
      const categoryMuscular: CategoriaMuscular = await this.getCategoryMuscularUseCase.execute({ id_categoria_muscular });
      return super.handleSuccess(categoryMuscular, response);
    }catch(err: any){
      return super.handleError(400, err.message || 'Unexpected Error', response);
    }
   }
}

