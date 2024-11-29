import { MysqlExercicioRepository } from "../../../repositories/implementations/MysqlIExercicioRepository";
import { GetExercisesByIdsUseCase } from "./GetExercisesByIdsUseCase";
import { GetExercisesByIdsController } from "./GetExercisesByIdsController";

const mysqlExercicioRepository = new MysqlExercicioRepository();

const getExercisesByIdsUseCase = new GetExercisesByIdsUseCase(
  mysqlExercicioRepository
);

const getExercisesByIdsController = new GetExercisesByIdsController(
  getExercisesByIdsUseCase
);

export { getExercisesByIdsUseCase, getExercisesByIdsController }