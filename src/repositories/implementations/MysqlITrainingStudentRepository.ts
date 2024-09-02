import Database from "../../data/database";
import { TrainingStudent } from "../../entities/TrainingStudent";
import { ITrainingStudentRepository } from "../ITrainingStudentRepository";

export class MysqlTrainingStudentRepository implements ITrainingStudentRepository {
  private db: Database;
  constructor() {
    this.db = new Database()
    this.db.connect()
  }

  async create(trainingStudent: TrainingStudent): Promise<void> {
    await this.db.query(
      'insert into treino_aluno (id_treino, aluno_id)', 
      [trainingStudent.id_treino, trainingStudent.aluno_id],
    );
  }

  async get(training_id: string): Promise<TrainingStudent> {
    const rows: TrainingStudent = await this.db.query(
      'select * from treino_aluno where id_treino = ?',
      [training_id],
    );
    await this.db.close();
    return rows;
  }

  async delete(training_id: string): Promise<void> {
    await this.db.query(
      'delete from treino_aluno where id_treino = ?',
      [training_id],
    );
  }
}