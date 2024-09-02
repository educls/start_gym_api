import { ITrainingStudentRepository } from "../../../../repositories/ITrainingStudentRepository";
import { ITrainingRepository } from "../../../../repositories/ITrainingRepository";
import { IUsersRepository } from "../../../../repositories/IUsersRepository";

import { ICreateTrainingStudentRequestDTO } from "./CreateTrainingStudentDTO";

export class CreateTrainingStudentUseCase {
  constructor(
    private trainingStudentRepository: ITrainingStudentRepository,
    private trainingRepository: ITrainingRepository,
    private userRepository: IUsersRepository,
  ) { }

  async execute(data: ICreateTrainingStudentRequestDTO) {
    if (!data.treino_id || !data.aluno_id) {
      throw new Error('Id is empty.')
    }
    const student = await this.userRepository.findById(data.aluno_id);
    const training = await this.trainingRepository.findTraining(data.treino_id);
    if (!training) {
      throw new Error('Invalid Training Id.')
    }
    if (!student) {
      throw new Error('Invalid Student Id.')
    }
    await this.trainingStudentRepository.create({ id_treino: data.treino_id, aluno_id: data.aluno_id });
  }
}