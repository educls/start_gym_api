import { ITrainingExeciseRepository } from "../../../../repositories/ITrainingExerciseRepository";
import { IDeleteTrainingExerciseRequestDTO } from "./DeleteTrainingExerciseDTO";

export class DeleteTrainingExerciseUseCase {
  constructor(
    private trainingExerciseRepository: ITrainingExeciseRepository,
  ) { }

  async execute(data: IDeleteTrainingExerciseRequestDTO) {
    if (!data.treino_id) {
      throw new Error('Id is empty.')
    }

    const trainingExercise = await this.trainingExerciseRepository.get(data.treino_id);
    if (!trainingExercise) {
      throw new Error('Invalid Id.')
    }
    await this.trainingExerciseRepository.delete(data.treino_id);
  }
}