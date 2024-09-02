import { Training } from "../../../entities/Training";
import { ITrainingRepository } from "../../../repositories/ITrainingRepository";
import { IDeleteTrainingRequestDTO } from "./DeleteTrainingDTO";

export class DeleteTrainingUseCase {
  constructor(
    private trainingRepository: ITrainingRepository,
  ) { }

  async execute(data: IDeleteTrainingRequestDTO) {
    if (!data.id_treino) {
      throw new Error('Id is empty.')
    }
    const treino: Training = await this.trainingRepository.findTraining(data.id_treino);
    if (!treino) {
      throw new Error('Invalid Id.')
    }
    await this.trainingRepository.deleteTraining(data.id_treino);
  }
}