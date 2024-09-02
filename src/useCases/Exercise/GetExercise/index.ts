import { MysqlExercicioRepository } from "../../../repositories/implementations/MysqlIExercicioRepository";
import { GetExerciseController } from "./GetExerciseController";
import { GetExerciseUseCase } from "./GetExerciseUseCase";

const mysqlExercicioRepository = new MysqlExercicioRepository();

const getExerciseUseCase = new GetExerciseUseCase(
  mysqlExercicioRepository,
);

const getExerciseController = new GetExerciseController(
  getExerciseUseCase,
);

export { getExerciseUseCase, getExerciseController }