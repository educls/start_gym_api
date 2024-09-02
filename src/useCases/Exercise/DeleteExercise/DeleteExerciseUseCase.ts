import { IExercicioRepository } from "../../../repositories/IExerciciosRepository";
import { IDeleteExerciseRequestDTO } from "./DeleteExerciseDTO";

export class DeleteExerciseUseCase{
  constructor(
    private execiseRepository: IExercicioRepository,
  ) { }

  async execute(data: IDeleteExerciseRequestDTO){
    if (!data.id_exercicio) {
      throw new Error('Id is empty.')
    }
    await this.execiseRepository.deleteExercicio(data.id_exercicio);
  }
}