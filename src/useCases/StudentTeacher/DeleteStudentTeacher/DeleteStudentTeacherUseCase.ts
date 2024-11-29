import { MysqlStudentTeacherRepository } from "../../../repositories/implementations/MysqlStudentTeacherRepository";
import { IDeleteStudentTeacherRequestDTO } from "./DeleteStudentTeacherDTO";


export class DeleteStudentTeacherUseCase{
  constructor(
    private mysqlStudentTeacherRepository: MysqlStudentTeacherRepository,
  ) { }

  async execute(data: IDeleteStudentTeacherRequestDTO){
    if (!data.aluno_id) {
      throw new Error('Student Id is Empty')
    }

    if (!data.professor_id) {
      throw new Error('Teacher Id is Empty')
    }

    await this.mysqlStudentTeacherRepository.delete(data.professor_id, data.aluno_id);
  }
}