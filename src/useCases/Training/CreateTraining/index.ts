import { MysqlTrainingRepository } from "../../../repositories/implementations/MysqlTrainingRepository";
import { CreateTrainingUseCase } from "./CreateTrainingUseCase";
import { CreateTrainingController } from "./CreateTrainingController";

const mysqlTrainingRepository = new MysqlTrainingRepository();

const createTrainingUseCase = new CreateTrainingUseCase(
  mysqlTrainingRepository,
);

const createTrainingController = new CreateTrainingController(
  createTrainingUseCase,
);

export { createTrainingUseCase, createTrainingController }