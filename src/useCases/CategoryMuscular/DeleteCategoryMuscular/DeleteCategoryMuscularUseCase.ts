import { ICategoriaMuscularRepository } from "../../../repositories/ICategoriaMuscularRepository";
import { IDeleteCategoryMuscularRequestDTO } from "./DeleteCategoryMuscularDTO";

export class DeleteCategoryMuscularUseCase {
  constructor(
    private categoryMuscular: ICategoriaMuscularRepository,
  ) { }

  async execute(data: IDeleteCategoryMuscularRequestDTO){
    if (!data.id_categoria_musc) {
      throw new Error('Id is empty');
    }
    await this.categoryMuscular.deleteCategoria(data.id_categoria_musc);
  }
}