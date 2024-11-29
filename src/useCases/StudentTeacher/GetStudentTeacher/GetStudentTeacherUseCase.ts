import { StudentTeacher } from "../../../entities/StudentTeacher";
import { MysqlStudentTeacherRepository } from "../../../repositories/implementations/MysqlStudentTeacherRepository";
import { IGetStudentTeacherRequestDTO } from "./GetStudentTeacherDTO";


export class GetStudentTeacherUseCase {
  constructor(
    private studentTeacherRepository: MysqlStudentTeacherRepository,
  ) { }

  async execute(data: IGetStudentTeacherRequestDTO){
    if (!data.aluno_id) {
      throw new Error('Student Id is Empty')
    }

    if (!data.professor_id) {
      throw new Error('Teacher Id is Empty')
    }

    const result: StudentTeacher = await this.studentTeacherRepository.get(data.professor_id, data.aluno_id);

    return result
  }
}