import { IStudentTeacherRepository } from "../../../repositories/IStudentTeacherRepository";
import { ICreateStudentTeacherRequestDTO } from "./CreateStudentTeacherDTO";


export class CreateStudentTeacherUseCase {
  constructor(
    private studentTeacherRepository: IStudentTeacherRepository,
  ) { }

  async execute(data: ICreateStudentTeacherRequestDTO) {
    if (!data.aluno_id) {
      throw new Error('Student Id is Empty')
    }
    if (!data.professor_id) {
      throw new Error('Teacher Id is Empty')
    }
    
    data.data_cadastro = new Date();

    await this.studentTeacherRepository.create({
      professor_id: data.professor_id,
      aluno_id: data.aluno_id,
      data_cadastro: data.data_cadastro,
    });
  }
}