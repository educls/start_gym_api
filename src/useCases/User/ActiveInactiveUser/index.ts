import { MysqlUsersRepository } from "../../../repositories/implementations/MysqlUsersRepository";
import { ActiveInactiveUserUseCase } from "./ActiveInactiveUserUseCase";
import { ActiveInactiveUserController } from "./ActiveInactiveUserController";

const mysqlUsersRepository = new MysqlUsersRepository();

const activeInactiveUserUseCase = new ActiveInactiveUserUseCase(
  mysqlUsersRepository,
);

const activeInactiveUserController = new ActiveInactiveUserController(
  activeInactiveUserUseCase,
);

export { activeInactiveUserUseCase, activeInactiveUserController };