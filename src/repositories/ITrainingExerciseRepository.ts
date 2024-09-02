import { TrainingExercise } from "../entities/TrainingExercise";

export interface ITrainingExeciseRepository{
  create(trainingExercise: TrainingExercise): Promise<void>;
  get(training_id: string): Promise<TrainingExercise>;
  delete(training_id: string): Promise<void>;
}