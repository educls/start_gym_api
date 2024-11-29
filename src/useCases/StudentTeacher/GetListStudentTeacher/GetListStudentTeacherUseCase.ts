import { IStudentTeacherRepository } from "../../../repositories/IStudentTeacherRepository";
import { IGetListStudentTeacherRequestDTO } from "./GetListStudentTeacherDTO";


export class GetListStudentTeacherUseCase{
  constructor(
    private studentTeacherRepository: IStudentTeacherRepository,
  ) { }

  async execute(data: IGetListStudentTeacherRequestDTO){
    if (!data.professor_id) {
      throw new Error('Teacher Id is empty');
    }

    const result = await this.studentTeacherRepository.getByTeacherId(data.professor_id);
    return result
  }
}