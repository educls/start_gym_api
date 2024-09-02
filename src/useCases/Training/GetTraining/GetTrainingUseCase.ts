import { Training } from "../../../entities/Training";
import { ITrainingRepository } from "../../../repositories/ITrainingRepository";
import { IGetTrainingRequestDTO } from "./GetTrainingDTO";

export class GetTrainingUseCase {
  constructor(
    private trainingRepository: ITrainingRepository,
  ) { }

  async execute(data: IGetTrainingRequestDTO): Promise<Training> {
    if (!data.id_treino) {
      throw new Error('Id is empty.')
    }
    const training: Training = await this.trainingRepository.findTraining(data.id_treino);
    if (!training) {
      throw new Error('Invalid Id.')
    }
    return training;
  }
}