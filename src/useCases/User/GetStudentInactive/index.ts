import { MysqlUsersRepository } from "../../../repositories/implementations/MysqlUsersRepository";
import { GetStudentInactiveUseCase } from "./GetStudentInactiveUseCase";
import { GetStudentInactiveController } from "./GetStudentInactiveController";

const mysqlUsersRepository = new MysqlUsersRepository();

const getStudentInactiveUseCase = new GetStudentInactiveUseCase(
  mysqlUsersRepository
);

const getStudentInactiveController = new GetStudentInactiveController(
  getStudentInactiveUseCase
);

export { getStudentInactiveUseCase, getStudentInactiveController };