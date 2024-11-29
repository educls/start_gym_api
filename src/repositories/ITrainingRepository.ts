import { Training } from "../entities/Training";

export interface ITrainingRepository{
  createTraining(training: Training): Promise<any>;
  editTraining(id_training: string, column: string, value: string): Promise<number>;
  findTraining(id_training: string): Promise<Training>;
  getTrainingByIds(ids: number[]): Promise<Training[]>;
  deleteTraining(id_training: string): Promise<void>;
  getTrainingByTeacherId(teacher_id: string): Promise<Training[]>
}