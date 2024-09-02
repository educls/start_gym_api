import { IExercicioRepository } from "../../../repositories/IExerciciosRepository";
import { Exercicio } from "../../../entities/Training";

export class GetExercisesUseCase{
  constructor(
    private exerciseRepository: IExercicioRepository,
  ) { }

  async execute(): Promise<Exercicio[]>{
    const exercises: Exercicio[] = await this.exerciseRepository.findExercicios();
    if (!exercises) {
      throw new Error('No Exercises Found.')
    }
    return exercises;
  }
}