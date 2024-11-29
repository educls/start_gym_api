export interface ICreateStudentTeacherRequestDTO {
  professor_id: string,
  aluno_id: string,
  data_cadastro?: Date,
}