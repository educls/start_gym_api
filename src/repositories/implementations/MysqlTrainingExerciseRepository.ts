import Database from "../../data/database";
import { TrainingExercise } from "../../entities/TrainingExercise";
import { ITrainingExeciseRepository } from "../ITrainingExerciseRepository";

export class MysqlTrainingExerciseRepository implements ITrainingExeciseRepository {
  private db: Database;
  constructor() {
    this.db = new Database()
    this.db.connect()
  }

  async create(trainingExercise: TrainingExercise): Promise<void> {
    await this.db.query(
      'insert into treino_exercicio (id_treino, exercicio_id',
      [trainingExercise.id_treino, trainingExercise.exercicio_id],
    );
  }

  async get(training_id: string): Promise<TrainingExercise> {
    const rows: TrainingExercise = await this.db.query(
      'select * from treino_exercicio where id_treino = ?',
      [training_id],
    );
    return rows;
  }

  async delete(training_id: string): Promise<void> {
    await this.db.query(
      'delete from treino_exercicio where id_treino = ?',
      [training_id],
    );
  }
}