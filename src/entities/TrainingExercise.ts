
export class TrainingExercise {
  public readonly id_treino?: string;
  public exercicio_id?: string;

  constructor(props: Omit<TrainingExercise, "id_treino">) {
    Object.assign(this, props);
  }
}
