import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";


export class GetStudentActiveUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  async execute(): Promise<number> {
    const users = await this.usersRepository.getActiveUsers();

    return users.length;
  }
}