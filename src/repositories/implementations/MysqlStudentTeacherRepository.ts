import Database from "../../data/database";
import { StudentTeacher } from "../../entities/StudentTeacher";
import { IStudentTeacherRepository } from "../IStudentTeacherRepository";


export class MysqlStudentTeacherRepository implements IStudentTeacherRepository {
  private db: Database;
  constructor() {
    this.db = new Database()
  }

  async create(studentTeacher: StudentTeacher): Promise<void> {
    await this.db.connect();
    await this.db.query(
      'insert into aluno_professor (professor_id, aluno_id, data_cadastro) values (?, ?, ?)', 
      [studentTeacher.professor_id, studentTeacher.aluno_id, studentTeacher.data_cadastro]);
    await this.db.close();
  }
  
  async get(id_professor: string, id_aluno: string): Promise<StudentTeacher> {
    await this.db.connect();
    const rows: StudentTeacher = await this.db.query(
      'select * from aluno_professor where professor_id = ? and aluno_id = ?', 
      [id_professor, id_aluno]);
    await this.db.close();
    return rows;
  }

  async getByTeacherId(id_professor: string): Promise<StudentTeacher[]> {
    await this.db.connect();
    const rows: StudentTeacher[] = await this.db.query(
      'select * from aluno_professor where professor_id = ?', 
      [id_professor]);
    await this.db.close();
    return rows;
  }

  async delete(id_professor: string, id_aluno: string): Promise<void> {
    await this.db.connect();
    await this.db.query(
      'delete from aluno_professor where id_professor = ? and id_aluno = ?', 
      [id_professor, id_aluno]);

    await this.db.close();
  }
}