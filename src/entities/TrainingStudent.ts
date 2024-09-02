
export class TrainingStudent {
  public readonly id_treino?: string;
  public aluno_id?: string;

  constructor(props: Omit<TrainingStudent, "id_treino">) {
    Object.assign(this, props);
  }
}
