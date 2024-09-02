import { MysqlExercicioRepository } from "../../../repositories/implementations/MysqlIExercicioRepository";
import { GetExercisesUseCase } from "./GetExercisesUseCase";
import { GetExecisesController } from "./GetExercisesController";

const mysqlExercicioRepository = new MysqlExercicioRepository();

const getExercisesUseCase = new GetExercisesUseCase(
  mysqlExercicioRepository,
);

const getExecisesController = new GetExecisesController(
  getExercisesUseCase,
);

export { getExercisesUseCase, getExecisesController }