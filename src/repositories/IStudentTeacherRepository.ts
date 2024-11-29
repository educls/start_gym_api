import { StudentTeacher } from "../entities/StudentTeacher";

export interface IStudentTeacherRepository{
  create(studentTeacher: StudentTeacher): Promise<void>;
  get(id_professor: string, id_aluno: string): Promise<StudentTeacher>;
  getByTeacherId(id_professor: string): Promise<StudentTeacher[]>;
  delete(id_professor: string, id_aluno: string): Promise<void>;
}