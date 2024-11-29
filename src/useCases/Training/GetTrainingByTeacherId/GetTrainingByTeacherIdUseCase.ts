import { Training } from "../../../entities/Training";
import { ITrainingRepository } from "../../../repositories/ITrainingRepository";
import { GetTrainingByTeacherIdRequestDTO } from "./GetTrainingByTeacherIdDTO";


export class GetTrainingByTeacherIdUseCase {
  constructor(private trainingRepository: ITrainingRepository) {}

  async execute(data: GetTrainingByTeacherIdRequestDTO): Promise<Training[]> {
    return this.trainingRepository.getTrainingByTeacherId(data.teacherId);
  }
}