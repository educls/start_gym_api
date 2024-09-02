import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IGetUserRequestDTO } from "./GetUserDTO";

export class GetUserUseCase {
  constructor(
    private userRepository: IUsersRepository,
  ){}

  async execute(data: IGetUserRequestDTO): Promise<User> {
    const userInfos: User = await this.userRepository.findById(data.id);
    if (userInfos.foto !== null) {
      userInfos.foto = userInfos.foto?.toString();
    }

    if (!userInfos) {
      throw new Error('Not a valid Id.')
    }

    return userInfos;
  }
}