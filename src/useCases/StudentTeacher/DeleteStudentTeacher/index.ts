import { MysqlStudentTeacherRepository } from "../../../repositories/implementations/MysqlStudentTeacherRepository";
import { DeleteStudentTeacherUseCase } from "./DeleteStudentTeacherUseCase";
import { DeleteStudentTeacherController } from "./DeleteStudentTeacherController";

const mysqlStudentTeacherRepository = new MysqlStudentTeacherRepository();

const deleteStudentTeacherUseCase = new DeleteStudentTeacherUseCase(
  mysqlStudentTeacherRepository,
);

const deleteStudentTeacherController = new DeleteStudentTeacherController(
  deleteStudentTeacherUseCase,
);

export { deleteStudentTeacherUseCase, deleteStudentTeacherController }