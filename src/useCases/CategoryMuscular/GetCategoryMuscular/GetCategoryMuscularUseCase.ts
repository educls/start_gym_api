import { CategoriaMuscular } from "../../../entities/Training";
import { ICategoriaMuscularRepository } from "../../../repositories/ICategoriaMuscularRepository";
import { IGetCategoryMuscularRequestDTO } from "./GetCategoryMuscularDTO";

export class GetCategoryMuscularUseCase {
  constructor(
    private categoryMuscular: ICategoriaMuscularRepository,
  ) { }

  async execute(data: IGetCategoryMuscularRequestDTO): Promise<CategoriaMuscular>{
    if (!data.id_categoria_muscular) {
      throw new Error('Id is empty.')
    }
    const categoriaMuscular: CategoriaMuscular = await this.categoryMuscular.findCategoria(data.id_categoria_muscular);
    if (!categoriaMuscular) {
      throw new Error('Category not Found.')
    }
    return categoriaMuscular;
  }
}