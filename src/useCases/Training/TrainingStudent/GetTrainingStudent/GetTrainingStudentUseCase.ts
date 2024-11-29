import { ITrainingStudentRepository } from "../../../../repositories/ITrainingStudentRepository";
import { IGetTrainingStudentRequestDTO } from "./GetTrainingStudentDTO";
import { TrainingStudent } from "../../../../entities/TrainingStudent";

export class GetTrainingStudentUseCase {
  constructor(
    private trainingStudentRepository: ITrainingStudentRepository,
  ) { }

  async execute(data: IGetTrainingStudentRequestDTO): Promise<TrainingStudent> { 
    const trainingStudent = await this.trainingStudentRepository.get(data.user_id);
    if (!trainingStudent) {
      throw new Error('Invalid Id.')
    }
    return trainingStudent;
  }
}