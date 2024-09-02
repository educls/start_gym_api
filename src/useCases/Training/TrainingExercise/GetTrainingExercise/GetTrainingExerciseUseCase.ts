import { TrainingExercise } from "../../../../entities/TrainingExercise";
import { ITrainingExeciseRepository } from "../../../../repositories/ITrainingExerciseRepository";
import { IGetTrainingExerciseRequestDTO } from "./GetTrainingExerciseDTO";

export class GetTrainingExerciseUseCase {
  constructor(
    private trainingExerciseRepository: ITrainingExeciseRepository,
  ) { }

  async execute(data: IGetTrainingExerciseRequestDTO): Promise<TrainingExercise> {
    if (!data.treino_id) {
      throw new Error('Id is empty.')
    }
    const trainingExercise = await this.trainingExerciseRepository.get(data.treino_id);
    if (!trainingExercise) {
      throw new Error('Invalid Id.')
    }
    return trainingExercise;
  }
}