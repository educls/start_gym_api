import { MysqlTrainingExerciseRepository } from "../../../../repositories/implementations/MysqlTrainingExerciseRepository";
import { MysqlTrainingRepository } from "../../../../repositories/implementations/MysqlTrainingRepository";
import { MysqlExercicioRepository } from "../../../../repositories/implementations/MysqlIExercicioRepository";

import { CreateTrainingExerciseController } from "./CreateTrainingExerciseController";
import { CreateTrainingExerciseUseCase } from "./CreateTrainingExerciseUseCase";

const mysqlTrainingRepository = new MysqlTrainingRepository();
const mysqlExercicioRepository = new MysqlExercicioRepository();
const mysqlTrainingExerciseRepository = new MysqlTrainingExerciseRepository();

const createTrainingExerciseUseCase = new CreateTrainingExerciseUseCase(
  mysqlTrainingExerciseRepository,
  mysqlTrainingRepository,
  mysqlExercicioRepository
);

const createTrainingExerciseController = new CreateTrainingExerciseController(
  createTrainingExerciseUseCase,
);

export { createTrainingExerciseUseCase, createTrainingExerciseController }