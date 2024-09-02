import { MysqlExercicioRepository } from "../../../repositories/implementations/MysqlIExercicioRepository";
import { MysqlCategoriaRepository } from "../../../repositories/implementations/MysqlICategoriaMuscularRepository";
import { CreateExerciseController } from "./CreateExerciseController";
import { CreateExerciseUseCase } from "./CreateExerciseUseCase";

const mysqlExercicioRepository = new MysqlExercicioRepository();
const mysqlCategoriaRepository = new MysqlCategoriaRepository();

const createExerciseUseCase = new CreateExerciseUseCase(
  mysqlExercicioRepository,
  mysqlCategoriaRepository
);

const createExerciseController = new CreateExerciseController(
  createExerciseUseCase,
);

export { createExerciseUseCase, createExerciseController };