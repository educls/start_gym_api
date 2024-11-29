import { MysqlUsersRepository } from "../../../repositories/implementations/MysqlUsersRepository";
import { ActiveInactiveUserRequestDTO } from "./ActiveInactiveUserDTO";


export class ActiveInactiveUserUseCase {
  constructor(
    private userRepository: MysqlUsersRepository,
  ) { }

  async execute(data: ActiveInactiveUserRequestDTO) {
    const user = await this.userRepository.findById(data.user_id);

    if (!user) {
      throw new Error('User not found');
    }

    await this.userRepository.activeInactiveUser(data.user_id);
  }
}