import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";


export class GetStudentInactiveUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  async execute(): Promise<number> {
    const users = await this.usersRepository.getInactiveUsers();

    return users.length;
  }
}