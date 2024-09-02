import { MysqlTrainingStudentRepository } from "../../../../repositories/implementations/MysqlITrainingStudentRepository";
import { MysqlTrainingRepository } from "../../../../repositories/implementations/MysqlTrainingRepository";

import { DeleteTrainingStudentController } from "./DeleteTrainingStudentController";
import { DeleteTrainingStudentUseCase } from "./DeleteTrainingStudentUseCase";

const mysqlTrainingStudentRepository = new MysqlTrainingStudentRepository();
const mysqlTrainingRepository = new MysqlTrainingRepository();

const deleteTrainingStudentUseCase = new DeleteTrainingStudentUseCase(
  mysqlTrainingStudentRepository,
  mysqlTrainingRepository,
);

const deleteTrainingStudentController = new DeleteTrainingStudentController(
  deleteTrainingStudentUseCase,
);

export { deleteTrainingStudentUseCase, deleteTrainingStudentController }