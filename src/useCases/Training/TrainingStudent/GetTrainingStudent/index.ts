import { MysqlTrainingStudentRepository } from "../../../../repositories/implementations/MysqlITrainingStudentRepository";
import { MysqlTrainingRepository } from "../../../../repositories/implementations/MysqlTrainingRepository";

import { GetTrainingStudentController } from "./GetTrainingStudentController";
import { GetTrainingStudentUseCase } from "./GetTrainingStudentUseCase";

const mysqlTrainingStudentRepository = new MysqlTrainingStudentRepository();
const mysqlTrainingRepository = new MysqlTrainingRepository();

const getTrainingStudentUseCase = new GetTrainingStudentUseCase(
  mysqlTrainingStudentRepository,
  mysqlTrainingRepository,
);

const getTrainingStudentController = new GetTrainingStudentController(
  getTrainingStudentUseCase,
);

export { getTrainingStudentUseCase, getTrainingStudentController }