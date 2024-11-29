import { MysqlTrainingStudentRepository } from "../../../../repositories/implementations/MysqlITrainingStudentRepository";

import { GetTrainingStudentController } from "./GetTrainingStudentController";
import { GetTrainingStudentUseCase } from "./GetTrainingStudentUseCase";

const mysqlTrainingStudentRepository = new MysqlTrainingStudentRepository();

const getTrainingStudentUseCase = new GetTrainingStudentUseCase(
  mysqlTrainingStudentRepository,
);

const getTrainingStudentController = new GetTrainingStudentController(
  getTrainingStudentUseCase,
);

export { getTrainingStudentUseCase, getTrainingStudentController }