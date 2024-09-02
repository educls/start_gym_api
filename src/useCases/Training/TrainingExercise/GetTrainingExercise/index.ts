import { MysqlTrainingExerciseRepository } from './../../../../repositories/implementations/MysqlTrainingExerciseRepository';
import { GetTrainingExerciseController } from './GetTrainingExerciseController';
import { GetTrainingExerciseUseCase } from './GetTrainingExerciseUseCase';

const mysqlTrainingExerciseRepository = new MysqlTrainingExerciseRepository();

const getTrainingExerciseUseCase = new GetTrainingExerciseUseCase(
  mysqlTrainingExerciseRepository,
);

const getTrainingExerciseController = new GetTrainingExerciseController(
  getTrainingExerciseUseCase,
);

export { getTrainingExerciseUseCase, getTrainingExerciseController }