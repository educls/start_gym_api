export class StudentTeacher {
  public readonly professor_id: string;
  public aluno_id?: string;
  public data_cadastro?: Date;

  constructor(props: Omit<StudentTeacher, "id">) {
    Object.assign(this, props);

    if (!this.data_cadastro) {
      this.data_cadastro = new Date();
    }
  }
}