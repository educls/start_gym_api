import { v4 as uuid } from 'uuid';

export class Training {
  public readonly id_treino?: string;

  public professor_id: string;
  public nome_treino?: string;
  public obs_treino?: string;

  constructor(props: Omit<Training, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id_treino = uuid();
    }
  }
}


export class CategoriaMuscular {
  public readonly id_categoria_musc?: string;
  public nome?: string;

  constructor(props: Omit<CategoriaMuscular, "id_categoria_musc">, id_categoria_musc?: string){
    Object.assign(this, props);

    if (!id_categoria_musc) {
      this.id_categoria_musc = uuid();
    }
  }
}

export class Exercicio {
  public readonly id_exercicio?: string;
  public nome?: string;
  public n_serie?: number;
  public n_repeticao?: number;
  public descanso?: string;
  public video?: string;
  public categoria_id?: string;

  constructor(props: Omit<Exercicio, "id_exercicio">){
    Object.assign(this, props);

    // if (!id_exercicio) {
    //   this.id_exercicio = uuid();
    // }
  }
}