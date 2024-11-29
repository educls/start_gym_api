import Database from '../../data/database';
import { IExercicioRepository } from '../IExerciciosRepository';
import { Exercicio } from '../../entities/Training';

export class MysqlExercicioRepository implements IExercicioRepository {
  private db: Database;
  constructor() {
    this.db = new Database()
  }

  async createExercicio(exercicio: Exercicio): Promise<void> {
    await this.db.connect();
    await this.db.query(
      'insert into exercicio (nome, n_serie, n_repeticao, descanso, video, categoria_id) values (?, ?, ?, ?, ?, ?)',
      [exercicio.nome, exercicio.n_serie, exercicio.n_repeticao, exercicio.descanso, exercicio.video, exercicio.categoria_id],
    );
    await this.db.close();
  }
  async editExercicio(id_exercicio: string, column: string, value: string): Promise<number> {
    await this.db.connect();
    const rows = await this.db.query(
      `update exercicio set ${column} = ? where id_exercicio = ?`,
      [value, id_exercicio],
    );
    await this.db.close();
    return 1;
  }
  async findExercicio(id_exercicio: string): Promise<Exercicio> {
    await this.db.connect();
    const rows: Exercicio = await this.db.query(
      'select * from exercicio where id_exercicio = ?',
      [id_exercicio],
    );
    await this.db.close();
    return rows;
  }
  async findExercicios(): Promise<Exercicio[]> {
    await this.db.connect();
    const rows: Exercicio[] = await this.db.query(
      'select * from exercicio',
      [],
    );
    await this.db.close();
    return rows;
  }

  async findExerciciosByIds(ids: number[]): Promise<Exercicio[]> {
    await this.db.connect();
    const rows: [Exercicio[], any] = await this.db.query(
      `SELECT * FROM exercicio WHERE id_exercicio IN (${ids})`,
      [],
    );
    await this.db.close();
    return rows;
  }

  async deleteExercicio(id_exercicio: string): Promise<void> {
    await this.db.connect();
    await this.db.query('delete from exercicio where id_exercicio = ?', [id_exercicio]);
    await this.db.close();
  } 
}