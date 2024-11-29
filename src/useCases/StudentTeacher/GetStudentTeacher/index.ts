import { MysqlStudentTeacherRepository } from "../../../repositories/implementations/MysqlStudentTeacherRepository";
import { GetStudentTeacherUseCase } from "./GetStudentTeacherUseCase";
import { GetStudentTeacherController } from "./GetStudentTeacherController";

const mysqlStudentTeacherRepository = new MysqlStudentTeacherRepository();

const getStudentTeacherUseCase = new GetStudentTeacherUseCase(
  mysqlStudentTeacherRepository,
);

const getStudentTeacherController = new GetStudentTeacherController(
  getStudentTeacherUseCase,
);

export { getStudentTeacherUseCase, getStudentTeacherController }