import { MysqlTrainingStudentRepository } from "../../../../repositories/implementations/MysqlITrainingStudentRepository";
import { MysqlTrainingRepository } from "../../../../repositories/implementations/MysqlTrainingRepository";
import { MysqlUsersRepository } from "../../../../repositories/implementations/MysqlUsersRepository";

import { CreateTrainingStudentUseCase } from "./CreateTrainingStudentUseCase";
import { CreateTrainingStudentController } from "./CreateTrainingStudentController";

const mysqlTrainingStudentRepository = new MysqlTrainingStudentRepository();
const mysqlTrainingRepository = new MysqlTrainingRepository();
const mysqlUsersRepository = new MysqlUsersRepository();

const createTrainingStudentUseCase = new CreateTrainingStudentUseCase(
  mysqlTrainingStudentRepository,
  mysqlTrainingRepository,
  mysqlUsersRepository
);

const createTrainingStudentController = new CreateTrainingStudentController(
  createTrainingStudentUseCase,
);

export { createTrainingStudentUseCase, createTrainingStudentController }