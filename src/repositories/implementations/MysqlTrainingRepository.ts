import Database from '../../data/database';
import { ITrainingRepository } from '../ITrainingRepository';
import { Training } from '../../entities/Training';

export class MysqlTrainingRepository implements ITrainingRepository {
  private db: Database;
  constructor() {
    this.db = new Database()
  }

  async createTraining(training: Training): Promise<any> {
    await this.db.connect();
    const rows = await this.db.query(
      'insert into treino (professor_id, nome_treino, obs_treino) values (?, ?, ?)', 
      [training.professor_id, training.nome_treino, training.obs_treino],
    );
    await this.db.close();
    return rows.insertId;
  }

  async deleteTraining(id_training: string): Promise<void> {
    await this.db.connect();
    await this.db.query('delete from treino where id_treino = ?', [id_training]);
    await this.db.close();
  }

  async editTraining(id_training: string, column: string, value: string): Promise<number> {
    await this.db.connect();
    const rows = await this.db.query(
      `update treino set ${column} = ? where id_treino = ?`, 
      [value, id_training],
    );
    await this.db.close();
    return 1;
  }

  async findTraining(id_training: string): Promise<Training> {
    await this.db.connect();
    const rows: Training = await this.db.query(
      'select * from treino where id_treino = ?', 
      [id_training],
    );
    await this.db.close();
    return rows;
  }

  async getTrainingByIds(ids: number[]): Promise<Training[]> {
    await this.db.connect();
    const rows: [Training[] | any] = await this.db.query(
      `select * from treino where id_treino in (${ids})`, 
      [],
    );
    await this.db.close();
    return rows;
  }

  async getTrainingByTeacherId(teacher_id: string): Promise<Training[]> {
    await this.db.connect();
    const rows: [Training[] | any] = await this.db.query(
      'select * from treino where professor_id = ?', 
      [teacher_id],
    );
    await this.db.close();
    return rows;
  }
}