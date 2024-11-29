import { Training } from "../../../entities/Training";
import { ITrainingRepository } from "../../../repositories/ITrainingRepository";
import { ICreateTrainingRequestDTO } from "./CreateTrainingDTO";

export class CreateTrainingUseCase {
  constructor(
    private trainingRepository: ITrainingRepository,
  ) { }

  async execute(data: ICreateTrainingRequestDTO) {
    if (!data.nome_treino) {
      throw new Error('Training Name Empty')
    }
    if (!data.professor_id) {
      throw new Error('Teacher ID is Empty')
    }
    if (!data.obs_treino) {
      throw new Error('Observation of Training is Empty')
    }

    const training = new Training(data);
    const result = await this.trainingRepository.createTraining(training);
    
    return result;
  }
}