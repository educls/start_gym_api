import Database from "../../data/database";
import { TrainingStudent } from "../../entities/TrainingStudent";
import { ITrainingStudentRepository } from "../ITrainingStudentRepository";

export class MysqlTrainingStudentRepository implements ITrainingStudentRepository {
  private db: Database;
  constructor() {
    this.db = new Database()
  }

  async create(trainingStudent: TrainingStudent): Promise<void> {
    await this.db.connect()
    await this.db.query(
      'insert into treino_aluno (treino_id, aluno_id) values (?, ?)', 
      [trainingStudent.id_treino, trainingStudent.aluno_id],
    );
    await this.db.close();
  }

  async get(user_id: string): Promise<TrainingStudent> {
    await this.db.connect()
    const rows: TrainingStudent = await this.db.query(
      'select * from treino_aluno where aluno_id = ?',
      [user_id],
    );
    await this.db.close();
    return rows;
  }

  async delete(training_id: string): Promise<void> {
    await this.db.connect()
    await this.db.query(
      'delete from treino_aluno where treino_id = ?',
      [training_id],
    );
    await this.db.close();
  }
}