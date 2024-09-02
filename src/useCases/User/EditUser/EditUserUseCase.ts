import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IEditUserAffectedRows, IEditUserRequestDTO } from "./EditUSerDTO";

export class EditUserUseCase {
  constructor(
    private userRepository: IUsersRepository,
  ) { }

  async execute(data: IEditUserRequestDTO): Promise<number> {
    const affectedRows: number = await this.userRepository.editById(data.id, data.column, data.value);

    if (affectedRows == 0) {
      throw new Error('Nothing edited.')
    }
    return affectedRows;
  }
}