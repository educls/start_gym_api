import { MysqlExercicioRepository } from "../../../repositories/implementations/MysqlIExercicioRepository";
import { DeleteExerciseUseCase } from "./DeleteExerciseUseCase";
import { DeleteExerciseController } from "./DeleteExerciseController";

const mysqlExercicioRepository = new MysqlExercicioRepository();

const deleteExerciseUseCase = new DeleteExerciseUseCase(
  mysqlExercicioRepository,
);

const deleteExerciseController = new DeleteExerciseController(
  deleteExerciseUseCase,
);

export { deleteExerciseUseCase, deleteExerciseController }