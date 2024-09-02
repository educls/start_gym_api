import { Controller } from "../../controller";
import { DeleteCategoryMuscularUseCase } from "./DeleteCategoryMuscularUseCase";
import { Request, Response } from "express";

export class DeleteCategotyMuscularController extends Controller {
  constructor(
    private deleteCategotyMuscular: DeleteCategoryMuscularUseCase,
  ) {
    super();
  }

  async handle(request: Request, response: Response): Promise<Response>{
    const id_categoria_musc = request.params.id;
    try{
      await this.deleteCategotyMuscular.execute({ id_categoria_musc });
      return super.handleSuccess('Category Deleted.', response);
    }catch(err: any){
      return super.handleError(400, err.message || 'Unexpected Error', response);
    }
  }
}