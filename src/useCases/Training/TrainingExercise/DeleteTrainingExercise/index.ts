import { MysqlTrainingExerciseRepository } from "../../../../repositories/implementations/MysqlTrainingExerciseRepository";
import { DeleteTrainingExerciseController } from "./DeleteTrainingExerciseController";
import { DeleteTrainingExerciseUseCase } from "./DeleteTrainingExerciseUseCase";

const mysqlTrainingExerciseRepository = new MysqlTrainingExerciseRepository();

const deleteTrainingExerciseUseCase = new DeleteTrainingExerciseUseCase(
  mysqlTrainingExerciseRepository,
);

const deleteTrainingExerciseController = new DeleteTrainingExerciseController(
  deleteTrainingExerciseUseCase,
);

export { deleteTrainingExerciseUseCase, deleteTrainingExerciseController }