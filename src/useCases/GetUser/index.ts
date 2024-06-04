
import { MysqlUsersRepository } from './../../repositories/implementations/MysqlUsersRepository';
import { GetUserController } from './GetUserController';
import { GetUserUseCase } from './GetUserUseCase';

const mysqlUsersRepository = new MysqlUsersRepository();

const getUserUseCase = new GetUserUseCase(
  mysqlUsersRepository,
);

const getUserController = new GetUserController(
  getUserUseCase,
)

export { getUserUseCase, getUserController }