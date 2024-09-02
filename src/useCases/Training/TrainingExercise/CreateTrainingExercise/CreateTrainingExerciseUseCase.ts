import { ITrainingExeciseRepository } from "../../../../repositories/ITrainingExerciseRepository";

import { ITrainingRepository } from "../../../../repositories/ITrainingRepository";
import { IExercicioRepository } from "../../../../repositories/IExerciciosRepository";

import { ICreateTrainingExerciseRequestDTO } from "./CreateTrainingExerciseDTO";

export class CreateTrainingExerciseUseCase {
  constructor(
    private trainingExerciseRepository: ITrainingExeciseRepository,
    private trainingRepository: ITrainingRepository,
    private exerciseRepository: IExercicioRepository,
  ) { }

  async execute(data: ICreateTrainingExerciseRequestDTO) {
    if (!data.treino_id) {
      throw new Error('Training Id is empty.')
    }
    const training = await this.trainingRepository.findTraining(data.treino_id);
    if (!training) {
      throw new Error('Invalid Id for Training.')
    }

    if (!data.exercicio_id) {
      throw new Error('Exercise Id is empty.')
    }
    const exercise = await this.exerciseRepository.findExercicio(data.treino_id);
    if (!exercise) {
      throw new Error('Invalid Id for Exercise.')
    }

    await this.trainingExerciseRepository.create(data);
  }
}