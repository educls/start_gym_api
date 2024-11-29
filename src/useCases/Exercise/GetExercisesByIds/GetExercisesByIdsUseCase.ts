import { Exercicio } from "../../../entities/Training";
import { MysqlExercicioRepository } from "../../../repositories/implementations/MysqlIExercicioRepository";
import { GetExercisesByIdsRequestDTO } from "./GetExercisesByIdsDTO";


export class GetExercisesByIdsUseCase {
  constructor(
    private exerciseRepository: MysqlExercicioRepository
  ) { }

  async execute(data: GetExercisesByIdsRequestDTO): Promise<Exercicio[]> {
    if (data.ids.length == 0) { 
      throw new Error('Nenhum id de exercício foi passado');
    }
    // const idsString = data.ids.map((id) => `'${id}'`).join(',');

    const result = await this.exerciseRepository.findExerciciosByIds(data.ids);

    result.forEach((exercise) => {
      exercise.video = exercise.video!.toString();
    });

    return result;
  }
}