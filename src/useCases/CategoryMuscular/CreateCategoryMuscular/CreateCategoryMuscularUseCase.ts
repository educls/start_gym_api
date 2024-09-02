import { ICategoriaMuscularRepository } from "../../../repositories/ICategoriaMuscularRepository";
import { ICreateCategoryMuscularRequestDTO } from "./CreateCategoryMuscularDTO";
import { CategoriaMuscular } from "../../../entities/Training";

export class CreateCategoryMuscularUseCase {
  constructor(
    private categoryMuscularRepository: ICategoriaMuscularRepository,
  ) { }

  async execute(data: ICreateCategoryMuscularRequestDTO){
    if (!data.nome) {
      throw new Error('Name is empty.')
    }
    const category = new CategoriaMuscular(data);
    await this.categoryMuscularRepository.createCategoria(category);
  }
}