import { MysqlStudentTeacherRepository } from "../../../repositories/implementations/MysqlStudentTeacherRepository";
import { GetListStudentTeacherUseCase } from "./GetListStudentTeacherUseCase";
import { GetListStudentTeacherController } from "./GetListStudentTeacherController";

const mysqlStudentTeacherRepository = new MysqlStudentTeacherRepository();

const getListStudentTeacherUseCase = new GetListStudentTeacherUseCase(
  mysqlStudentTeacherRepository,
);

const getListStudentTeacherController = new GetListStudentTeacherController(
  getListStudentTeacherUseCase,
);

export { getListStudentTeacherUseCase, getListStudentTeacherController }