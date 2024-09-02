import { Exercicio } from "../entities/Training";

export interface IExercicioRepository{
  createExercicio(exercicio: Exercicio): Promise<void>;
  editExercicio(id_exercicio: string, column: string, value: string): Promise<number>;
  findExercicio(id_exercicio: string): Promise<Exercicio>;
  findExercicios(): Promise<Exercicio[]>;
  deleteExercicio(id_exercicio: string): Promise<void>;
}