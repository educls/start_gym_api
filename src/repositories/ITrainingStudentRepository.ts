import { TrainingStudent } from "../entities/TrainingStudent";

export interface ITrainingStudentRepository{
  create(trainingStudent: TrainingStudent): Promise<void>;
  get(training_id: string): Promise<TrainingStudent>;
  delete(training_id: string): Promise<void>;
}