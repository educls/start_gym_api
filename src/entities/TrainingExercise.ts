
export class TrainingExercise {
  public readonly treino_id?: string;
  public exercicio_id?: string;

  constructor(props: Omit<TrainingExercise, "treino_id">) {
    Object.assign(this, props);
  }
}
