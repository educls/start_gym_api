import { IExercicioRepository } from "../../../repositories/IExerciciosRepository";
import { ICreateExerciseRequestDTO } from "./CreateExerciseDTO";

import { ICategoriaMuscularRepository } from "../../../repositories/ICategoriaMuscularRepository";

export class CreateExerciseUseCase{
  constructor(
    private exerciseRepository: IExercicioRepository,
    private categoryMuscularRepository: ICategoriaMuscularRepository,
  ) { }

  async execute(data: ICreateExerciseRequestDTO){
    if (!data.categoria_id) {
      throw new Error('Category Id is empty.')
    }
    const categoryMuscular = await this.categoryMuscularRepository.findCategoria(data.categoria_id);
    if (!categoryMuscular) {
      throw new Error('Category Id is Invalid.')
    }

    if (!data.descanso) {
      throw new Error('Rest is empty.')
    }
    if (!data.n_repeticao) {
      throw new Error('Number of Repetition is empty.')
    }
    if (!data.n_serie) {
      throw new Error('Sets is empty.')
    }
    if (!data.nome) {
      throw new Error('Name is empty.')
    }
    if (!data.video) {
      throw new Error('Video is empty.')
    }

    await this.exerciseRepository.createExercicio(data);
  }
}