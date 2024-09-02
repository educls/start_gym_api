import { Controller } from "../../controller";
import { EditCategoryMuscularUseCase } from "./EditCategoryMuscularUseCase";
import { Request, Response } from "express";

export class EditCategoryMuscularController extends Controller {
  constructor(
    private editCategoryMuscularUseCase: EditCategoryMuscularUseCase,
  ) {
    super();
  }

  async handle(request: Request, response: Response): Promise<Response>{
    const id_categoria_muscular = request.params.id;
    const { nome } = request.body;
    let affectedRows: number = 0;

    try{
      if (nome) {
        const rows: number = await this.editCategoryMuscularUseCase.execute({ id_categoria_muscular, column: 'nome', value: nome });
        affectedRows += rows;
      }
      
      if (affectedRows > 0) {
        return super.handleSuccess('Categoria Editada.', response);
      }
      return super.handleSuccess('Nenhuma Categoria Editada.', response);
    }catch(err: any){
      return super.handleError(400, err.message || 'Unexpected Error', response);
    }
  }
}