import { MysqlUsersRepository } from "../../../repositories/implementations/MysqlUsersRepository";
import { GetStudentActiveUseCase } from "./GetStudentActiveUseCase";
import { GetStudentActiveController } from "./GetStudentActiveController";

const mysqlUsersRepository = new MysqlUsersRepository();

const getStudentActiveUseCase = new GetStudentActiveUseCase(
  mysqlUsersRepository
);

const getStudentActiveController = new GetStudentActiveController(
  getStudentActiveUseCase
);

export { getStudentActiveUseCase, getStudentActiveController };