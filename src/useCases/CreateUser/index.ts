
import { MysqlUsersRepository } from './../../repositories/implementations/MysqlUsersRepository';
import { MailTrapMailProvider } from './../../providers/implementations/MailTrapMailProvider';
import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUserController } from './CreateUserController';

const mysqlUsersRepository = new MysqlUsersRepository();
const mailTrapMailProvider = new MailTrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
  mysqlUsersRepository,
  mailTrapMailProvider,
)

const createUserController = new CreateUserController(
  createUserUseCase,
)

export { createUserUseCase, createUserController }