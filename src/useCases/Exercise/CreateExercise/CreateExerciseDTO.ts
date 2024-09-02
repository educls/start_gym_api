export interface ICreateExerciseRequestDTO{
  id_exercicio?: string;
  nome?: string;
  n_serie?: number;
  n_repeticao?: number;
  descanso?: string;
  video?: string;
  categoria_id?: string;
}