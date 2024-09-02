import { IExercicioRepository } from "../../../repositories/IExerciciosRepository";
import { IGetExerciseRequestDTO } from "./GetExerciseDTO";
import { Exercicio } from "../../../entities/Training";

export class GetExerciseUseCase{
  constructor(
    private exerciseRepository: IExercicioRepository,
  ) { }

  async execute(data: IGetExerciseRequestDTO): Promise<Exercicio>{
    if (!data.id_exercicio) {
      throw new Error('Id is empty.')
    }
    const exercise: Exercicio = await this.exerciseRepository.findExercicio(data.id_exercicio);
    if (!exercise) {
      throw new Error('Invalid Id.')
    }
    return exercise;
  }
}
