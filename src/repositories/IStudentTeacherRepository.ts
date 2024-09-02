import { StudentTeacher } from "../entities/StudentTeacher";

export interface IStudentTeacher{
  create(studentTeacher: StudentTeacher): Promise<void>;
  get(id_training: string): Promise<StudentTeacher>;
  delete(id_training: string): Promise<void>;
}