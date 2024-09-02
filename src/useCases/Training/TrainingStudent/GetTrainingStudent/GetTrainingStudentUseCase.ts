import { ITrainingStudentRepository } from "../../../../repositories/ITrainingStudentRepository";
import { ITrainingRepository } from "../../../../repositories/ITrainingRepository";

import { IGetTrainingStudentRequestDTO } from "./GetTrainingStudentDTO";
import { TrainingStudent } from "../../../../entities/TrainingStudent";

export class GetTrainingStudentUseCase {
  constructor(
    private trainingStudentRepository: ITrainingStudentRepository,
    private trainingRepository: ITrainingRepository,
  ) { }

  async execute(data: IGetTrainingStudentRequestDTO): Promise<TrainingStudent> { 
    if (!data.treino_id) {
      throw new Error('Id is empty.')
    }
    const training = await this.trainingRepository.findTraining(data.treino_id);
    if (!training) {
      throw new Error('Invalid Training Id.')
    }
    const trainingStudent = await this.trainingStudentRepository.get(data.treino_id);
    return trainingStudent;
  }
}