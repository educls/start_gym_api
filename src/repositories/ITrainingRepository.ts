import { Training } from "../entities/Training";

export interface ITrainingRepository{
  createTraining(training: Training): Promise<void>;
  editTraining(id_training: string, column: string, value: string): Promise<number>;
  findTraining(id_training: string): Promise<Training>;
  deleteTraining(id_training: string): Promise<void>;
}