import { ITrainingStudentRepository } from "../../../../repositories/ITrainingStudentRepository";
import { ITrainingRepository } from "../../../../repositories/ITrainingRepository";

import { IDeleteTrainingStudentRequestDTO } from "./DeleteTrainingStudentDTO";

export class DeleteTrainingStudentUseCase{
  constructor(
    private trainingStudentRepository: ITrainingStudentRepository,
    private trainingRepository: ITrainingRepository,
  ) { }

  async execute(data: IDeleteTrainingStudentRequestDTO){
    if (!data.treino_id) {
      throw new Error('Id is empty.')
    }
    const training = await this.trainingRepository.findTraining(data.treino_id);
    if (!training) {
      throw new Error('Invalid Training Id.')
    }
    await this.trainingStudentRepository.delete(data.treino_id);
  }
}