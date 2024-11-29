import { MysqlStudentTeacherRepository } from "../../../repositories/implementations/MysqlStudentTeacherRepository";
import { CreateStudentTeacherUseCase } from "./CreateStudentTeacherUseCase";
import { CreateStudentTeacherController } from "./CreateStudentTeacherController";

const mysqlStudentTeacherRepository = new MysqlStudentTeacherRepository();

const createStudentTeacherUseCase = new CreateStudentTeacherUseCase(
  mysqlStudentTeacherRepository,
);

const createStudentTeacherController = new CreateStudentTeacherController(
  createStudentTeacherUseCase,
);

export { createStudentTeacherUseCase, createStudentTeacherController }