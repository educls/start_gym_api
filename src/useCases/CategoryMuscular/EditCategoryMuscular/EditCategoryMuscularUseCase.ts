import { ICategoriaMuscularRepository } from "../../../repositories/ICategoriaMuscularRepository";
import { IEditCategoryMuscularRequestDTO } from "./EditCategoryMuscularDTO";

export class EditCategoryMuscularUseCase {
  constructor(
    private categoriaMuscularRepository: ICategoriaMuscularRepository,
  ) { }

  async execute(data: IEditCategoryMuscularRequestDTO): Promise<number> {
    if (!data.id_categoria_muscular) {
      throw new Error('Id is empty.')
    }
    if (!data.value) {
      throw new Error('Value is empty.')
    }
    const affectedRows: number = await this.categoriaMuscularRepository.editCategoria(data.id_categoria_muscular, data.column, data.value);
    if (affectedRows == 0) {
      throw new Error('Nothing edited.')
    }
    return affectedRows;
  }
}